import assert from "node:assert/strict";
import test from "node:test";

import {
  buildSlackDemoPayload,
  isSlackWebhookUrl,
} from "../src/lib/demo-webhook.ts";

test("isSlackWebhookUrl detects Slack incoming webhook hosts", () => {
  assert.equal(isSlackWebhookUrl("https://hooks.slack.com/services/T/B/secret"), true);
  assert.equal(isSlackWebhookUrl("https://example.com/webhook"), false);
});

test("buildSlackDemoPayload formats demo request for Slack", () => {
  const payload = buildSlackDemoPayload({
    name: "Ada Lovelace",
    company: "Analytical Engines GmbH",
    email: "ada@example.com",
    role: "Head of CapEx",
    message: "Interested in portfolio steering for EU programs.",
    locale: "de",
    submittedAt: "2026-06-28T10:00:00.000Z",
  });

  assert.equal(payload.text.includes("Analytical Engines GmbH"), true);
  assert.equal(payload.blocks[0]?.type, "header");
  assert.equal(payload.blocks.some((block) => block.type === "section"), true);
  assert.equal(
    payload.blocks.some(
      (block) =>
        block.type === "section" &&
        block.text?.text.includes("Interested in portfolio steering"),
    ),
    true,
  );
});

test("buildSlackDemoPayload omits message block when empty", () => {
  const payload = buildSlackDemoPayload({
    name: "Test User",
    company: "Test Co",
    email: "test@example.com",
    role: "",
    message: "   ",
    locale: "en",
    submittedAt: "2026-06-28T10:00:00.000Z",
  });

  assert.equal(payload.blocks.some((block) => block.type === "divider"), false);
});
