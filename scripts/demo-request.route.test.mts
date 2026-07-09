import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { NextRequest } from "next/server";

import { POST } from "../src/app/api/demo-request/route.ts";
import { resetMemoryRateLimitStore } from "../src/lib/demo-rate-limit.ts";

const originalFetch = globalThis.fetch;

function passthroughDebugIngest(
  handler: (url: string, init?: RequestInit) => Response | Promise<Response>,
): typeof fetch {
  return (async (input, init) => {
    const url = String(input);
    if (url.includes("/ingest/")) {
      return new Response(null, { status: 204 });
    }
    return handler(url, init);
  }) as typeof fetch;
}
const envBackup = {
  slack: process.env.SLACK_DEMO_WEBHOOK_URL,
  generic: process.env.DEMO_FORM_WEBHOOK_URL,
  resendKey: process.env.RESEND_API_KEY,
  resendFrom: process.env.RESEND_FROM_EMAIL,
  notifyEmail: process.env.DEMO_NOTIFY_EMAIL,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
};

afterEach(() => {
  globalThis.fetch = originalFetch;
  resetMemoryRateLimitStore();
  if (envBackup.slack === undefined) {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
  } else {
    process.env.SLACK_DEMO_WEBHOOK_URL = envBackup.slack;
  }
  if (envBackup.generic === undefined) {
    delete process.env.DEMO_FORM_WEBHOOK_URL;
  } else {
    process.env.DEMO_FORM_WEBHOOK_URL = envBackup.generic;
  }
  if (envBackup.resendKey === undefined) {
    delete process.env.RESEND_API_KEY;
  } else {
    process.env.RESEND_API_KEY = envBackup.resendKey;
  }
  if (envBackup.resendFrom === undefined) {
    delete process.env.RESEND_FROM_EMAIL;
  } else {
    process.env.RESEND_FROM_EMAIL = envBackup.resendFrom;
  }
  if (envBackup.notifyEmail === undefined) {
    delete process.env.DEMO_NOTIFY_EMAIL;
  } else {
    process.env.DEMO_NOTIFY_EMAIL = envBackup.notifyEmail;
  }
  if (envBackup.contactEmail === undefined) {
    delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  } else {
    process.env.NEXT_PUBLIC_CONTACT_EMAIL = envBackup.contactEmail;
  }
});

function demoRequest(
  body: unknown,
  ip = "203.0.113.10",
  init?: { rawBody?: string; contentType?: string },
): Promise<Response> {
  return POST(
    new NextRequest("http://localhost/api/demo-request", {
      method: "POST",
      headers: {
        "Content-Type": init?.contentType ?? "application/json",
        "x-forwarded-for": ip,
      },
      body: init?.rawBody ?? JSON.stringify(body),
    }),
  );
}

describe("POST /api/demo-request", () => {
  it("returns 400 for invalid JSON", async () => {
    const res = await demoRequest({}, "203.0.113.11", { rawBody: "{not-json" });
    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { error: "Invalid JSON" });
  });

  it("returns 400 for missing or invalid fields", async () => {
    const res = await demoRequest(
      { name: "", company: "Acme", email: "bad-email" },
      "203.0.113.12",
    );
    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { error: "Missing or invalid fields" });
  });

  it("returns 400 when payload exceeds size limits", async () => {
    const res = await demoRequest(
      {
        name: "A".repeat(201),
        company: "Acme",
        email: "valid@example.com",
      },
      "203.0.113.13",
    );
    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { error: "Payload too large" });
  });

  it("returns 200 with delivered=false when Resend is not configured", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;
    delete process.env.RESEND_API_KEY;
    delete process.env.DEMO_NOTIFY_EMAIL;
    delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    const res = await demoRequest(
      {
        name: "Ada Lovelace",
        company: "Analytical Engines",
        email: "ada@example.com",
        role: "CapEx lead",
        message: "Portfolio steering demo",
        locale: "en",
      },
      "203.0.113.14",
    );

    assert.equal(res.status, 200);
    const json = (await res.json()) as { ok: boolean; delivered: boolean; mailtoFallback: string };
    assert.equal(json.ok, true);
    assert.equal(json.delivered, false);
    assert.match(json.mailtoFallback, /^mailto:/);
  });

  it("returns 200 when Resend delivery succeeds", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_FROM_EMAIL = "noreply@capconhq.com";
    delete process.env.DEMO_NOTIFY_EMAIL;
    delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    globalThis.fetch = passthroughDebugIngest((url) => {
      if (url.includes("api.resend.com")) {
        return new Response(JSON.stringify({ id: "email_123" }), { status: 200 });
      }
      return originalFetch(url);
    });

    const res = await demoRequest(
      {
        name: "Ada Lovelace",
        company: "Analytical Engines",
        email: "ada@example.com",
        locale: "en",
      },
      "203.0.113.14",
    );

    assert.equal(res.status, 200);
    const json = (await res.json()) as { ok: boolean; delivered: boolean; mailtoFallback: string };
    assert.equal(json.ok, true);
    assert.equal(json.delivered, true);
    assert.match(json.mailtoFallback, /^mailto:/);
  });

  it("returns 502 when webhook delivery fails", async () => {
    process.env.SLACK_DEMO_WEBHOOK_URL =
      "https://hooks.slack.com/services/TTEST/BTEST/secret";

    globalThis.fetch = (async () =>
      new Response("upstream error", { status: 500 })) as typeof fetch;

    const res = await demoRequest(
      {
        name: "Test",
        company: "Fail Co",
        email: "fail@example.com",
      },
      "203.0.113.15",
    );

    assert.equal(res.status, 502);
    assert.deepEqual(await res.json(), { error: "Upstream failed" });
  });

  it("returns 429 after more than five submissions from one IP", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_FROM_EMAIL = "noreply@capconhq.com";

    globalThis.fetch = passthroughDebugIngest((url) => {
      if (url.includes("api.resend.com")) {
        return new Response(JSON.stringify({ id: "email_123" }), { status: 200 });
      }
      return originalFetch(url);
    });

    const ip = "203.0.113.16";
    const body = {
      name: "Rate",
      company: "Limit GmbH",
      email: "rate@example.com",
    };

    for (let i = 0; i < 5; i += 1) {
      const res = await demoRequest(body, ip);
      assert.equal(res.status, 200, `expected 200 on attempt ${i + 1}`);
    }

    const blocked = await demoRequest(body, ip);
    assert.equal(blocked.status, 429);
    assert.deepEqual(await blocked.json(), { error: "Too many requests" });
  });
});
