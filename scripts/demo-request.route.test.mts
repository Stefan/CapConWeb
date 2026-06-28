import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { NextRequest } from "next/server";

import { POST } from "../src/app/api/demo-request/route.ts";
import { resetMemoryRateLimitStore } from "../src/lib/demo-rate-limit.ts";

const originalFetch = globalThis.fetch;
const envBackup = {
  slack: process.env.SLACK_DEMO_WEBHOOK_URL,
  generic: process.env.DEMO_FORM_WEBHOOK_URL,
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

  it("returns 200 with mailto fallback when no webhook is configured", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;

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
    const json = (await res.json()) as { ok: boolean; mailtoFallback: string };
    assert.equal(json.ok, true);
    assert.match(json.mailtoFallback, /^mailto:/);
    assert.match(json.mailtoFallback, /Analytical%20Engines|Analytical Engines/);
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
