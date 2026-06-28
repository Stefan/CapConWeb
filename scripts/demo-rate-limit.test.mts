import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";

import {
  DEMO_RATE_LIMIT_MAX,
  extractDemoRequestClientKey,
  isDemoRateLimited,
  memoryRateLimitBackend,
  resetMemoryRateLimitStore,
  sanitizeRateLimitClientKey,
  type RateLimitBackend,
} from "../src/lib/demo-rate-limit.ts";

const originalFetch = globalThis.fetch;
const envBackup = {
  upstashUrl: process.env.UPSTASH_REDIS_REST_URL,
  upstashToken: process.env.UPSTASH_REDIS_REST_TOKEN,
  kvUrl: process.env.KV_REST_API_URL,
  kvToken: process.env.KV_REST_API_TOKEN,
};

afterEach(() => {
  resetMemoryRateLimitStore();
  globalThis.fetch = originalFetch;
  if (envBackup.upstashUrl === undefined) delete process.env.UPSTASH_REDIS_REST_URL;
  else process.env.UPSTASH_REDIS_REST_URL = envBackup.upstashUrl;
  if (envBackup.upstashToken === undefined) delete process.env.UPSTASH_REDIS_REST_TOKEN;
  else process.env.UPSTASH_REDIS_REST_TOKEN = envBackup.upstashToken;
  if (envBackup.kvUrl === undefined) delete process.env.KV_REST_API_URL;
  else process.env.KV_REST_API_URL = envBackup.kvUrl;
  if (envBackup.kvToken === undefined) delete process.env.KV_REST_API_TOKEN;
  else process.env.KV_REST_API_TOKEN = envBackup.kvToken;
});

describe("sanitizeRateLimitClientKey", () => {
  it("normalizes unsafe characters and caps length", () => {
    assert.equal(sanitizeRateLimitClientKey("  203.0.113.1  "), "203.0.113.1");
    assert.equal(sanitizeRateLimitClientKey("evil\nkey"), "evil_key");
    assert.equal(sanitizeRateLimitClientKey(""), "unknown");
  });
});

describe("extractDemoRequestClientKey", () => {
  it("prefers x-forwarded-for first hop", () => {
    const headers = new Headers({
      "x-forwarded-for": "203.0.113.9, 10.0.0.1",
      "x-real-ip": "198.51.100.1",
    });
    assert.equal(extractDemoRequestClientKey(headers), "203.0.113.9");
  });
});

describe("isDemoRateLimited", () => {
  it("allows up to DEMO_RATE_LIMIT_MAX requests per window", async () => {
    for (let i = 0; i < DEMO_RATE_LIMIT_MAX; i += 1) {
      assert.equal(
        await isDemoRateLimited("203.0.113.50", { backend: memoryRateLimitBackend }),
        false,
        `attempt ${i + 1} should pass`,
      );
    }

    assert.equal(
      await isDemoRateLimited("203.0.113.50", { backend: memoryRateLimitBackend }),
      true,
    );
  });

  it("tracks clients independently", async () => {
    for (let i = 0; i < DEMO_RATE_LIMIT_MAX; i += 1) {
      await isDemoRateLimited("client-a", { backend: memoryRateLimitBackend });
    }

    assert.equal(
      await isDemoRateLimited("client-a", { backend: memoryRateLimitBackend }),
      true,
    );
    assert.equal(
      await isDemoRateLimited("client-b", { backend: memoryRateLimitBackend }),
      false,
    );
  });

  it("works with injectable backends (KV-style counter semantics)", async () => {
    const counts = new Map<string, number>();
    const backend: RateLimitBackend = {
      async increment(key) {
        const next = (counts.get(key) ?? 0) + 1;
        counts.set(key, next);
        return next;
      },
    };

    assert.equal(await isDemoRateLimited("kv-client", { backend, max: 3 }), false);
    assert.equal(await isDemoRateLimited("kv-client", { backend, max: 3 }), false);
    assert.equal(await isDemoRateLimited("kv-client", { backend, max: 3 }), false);
    assert.equal(await isDemoRateLimited("kv-client", { backend, max: 3 }), true);
  });

  it("uses Upstash REST pipeline when Redis env is configured", async () => {
    delete process.env.KV_REST_API_URL;
    delete process.env.KV_REST_API_TOKEN;
    process.env.UPSTASH_REDIS_REST_URL = "https://redis.example.com";
    process.env.UPSTASH_REDIS_REST_TOKEN = "test-token";
    resetMemoryRateLimitStore();

    let incrCount = 0;
    const pipedCommands: string[] = [];
    globalThis.fetch = (async (_url, init) => {
      const batch = JSON.parse(String(init?.body)) as unknown[][];
      pipedCommands.push(...batch.map((cmd) => String(cmd[0])));

      if (batch[0]?.[0] === "INCR") {
        incrCount += 1;
        return new Response(
          JSON.stringify({ result: [incrCount, incrCount === 1 ? -1 : 300] }),
          { status: 200 },
        );
      }

      return new Response(JSON.stringify({ result: [1] }), { status: 200 });
    }) as typeof fetch;

    assert.equal(await isDemoRateLimited("203.0.113.77"), false);
    assert.equal(await isDemoRateLimited("203.0.113.77"), false);
    assert.deepEqual(pipedCommands.slice(0, 2), ["INCR", "TTL"]);
    assert.equal(pipedCommands.includes("EXPIRE"), true);
  });
});
