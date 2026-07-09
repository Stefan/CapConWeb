import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";

import { deliverDemoRequest } from "../src/lib/demo-webhook.ts";

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

const samplePayload = {
  name: "Test User",
  company: "Test Co",
  email: "test@example.com",
  role: "PMO",
  message: "Hello",
  locale: "en",
  submittedAt: "2026-06-28T10:00:00.000Z",
};

describe("deliverDemoRequest", () => {
  it("throws when no delivery channel succeeds but recipients exist", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;
    delete process.env.RESEND_API_KEY;
    delete process.env.DEMO_NOTIFY_EMAIL;
    delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    await assert.rejects(
      () => deliverDemoRequest(samplePayload),
      /All demo notification channels failed/,
    );
  });

  it("sends email via Resend when configured", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_FROM_EMAIL = "noreply@capconhq.com";
    process.env.DEMO_NOTIFY_EMAIL = "sales@capconhq.com";

    let url = "";
    let body: unknown;
    globalThis.fetch = passthroughDebugIngest((_url, init) => {
      url = _url;
      body = JSON.parse(String(init?.body));
      return new Response(JSON.stringify({ id: "email_123" }), { status: 200 });
    });

    const result = await deliverDemoRequest(samplePayload);
    assert.equal(result.delivered, true);
    assert.equal(result.targetCount, 1);
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal((body as { reply_to: string }).reply_to, samplePayload.email);
  });

  it("posts Slack Block Kit payload to Slack webhook URL", async () => {
    process.env.SLACK_DEMO_WEBHOOK_URL =
      "https://hooks.slack.com/services/TTEST/BTEST/secret";

    let body: unknown;
    globalThis.fetch = passthroughDebugIngest((_url, init) => {
      body = JSON.parse(String(init?.body));
      return new Response("ok", { status: 200 });
    });

    const result = await deliverDemoRequest(samplePayload);
    assert.equal(result.delivered, true);
    assert.equal(result.targetCount, 1);
    assert.equal((body as { text: string }).text.includes("Test Co"), true);
    assert.equal(Array.isArray((body as { blocks: unknown[] }).blocks), true);
  });

  it("posts raw JSON to generic webhook URL", async () => {
    process.env.DEMO_FORM_WEBHOOK_URL = "https://crm.example.com/hooks/demo";

    let body: unknown;
    globalThis.fetch = (async () => {
      body = samplePayload;
      return new Response("ok", { status: 200 });
    }) as typeof fetch;

    await deliverDemoRequest(samplePayload);
    assert.deepEqual(body, samplePayload);
  });

  it("throws when all configured webhooks fail", async () => {
    process.env.SLACK_DEMO_WEBHOOK_URL =
      "https://hooks.slack.com/services/TTEST/BTEST/secret";

    globalThis.fetch = (async () =>
      new Response("fail", { status: 500 })) as typeof fetch;

    await assert.rejects(() => deliverDemoRequest(samplePayload));
  });

  it("deduplicates identical webhook URLs", async () => {
    const url = "https://hooks.slack.com/services/TTEST/BTEST/secret";
    process.env.SLACK_DEMO_WEBHOOK_URL = url;
    process.env.DEMO_FORM_WEBHOOK_URL = url;

    let calls = 0;
    globalThis.fetch = passthroughDebugIngest(() => {
      calls += 1;
      return new Response("ok", { status: 200 });
    });

    await deliverDemoRequest(samplePayload);
    assert.equal(calls, 1);
  });
});
