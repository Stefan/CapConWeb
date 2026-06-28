import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";

import { deliverDemoRequest } from "../src/lib/demo-webhook.ts";

const originalFetch = globalThis.fetch;
const envBackup = {
  slack: process.env.SLACK_DEMO_WEBHOOK_URL,
  generic: process.env.DEMO_FORM_WEBHOOK_URL,
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
  it("returns delivered=false when no webhook configured", async () => {
    delete process.env.SLACK_DEMO_WEBHOOK_URL;
    delete process.env.DEMO_FORM_WEBHOOK_URL;

    const result = await deliverDemoRequest(samplePayload);
    assert.deepEqual(result, { delivered: false, targetCount: 0 });
  });

  it("posts Slack Block Kit payload to Slack webhook URL", async () => {
    process.env.SLACK_DEMO_WEBHOOK_URL =
      "https://hooks.slack.com/services/TTEST/BTEST/secret";

    let body: unknown;
    globalThis.fetch = (async (_url, init) => {
      body = JSON.parse(String(init?.body));
      return new Response("ok", { status: 200 });
    }) as typeof fetch;

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
    globalThis.fetch = (async () => {
      calls += 1;
      return new Response("ok", { status: 200 });
    }) as typeof fetch;

    await deliverDemoRequest(samplePayload);
    assert.equal(calls, 1);
  });
});
