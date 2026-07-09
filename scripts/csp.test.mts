import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { buildContentSecurityPolicy } from "../src/lib/csp.ts";

describe("buildContentSecurityPolicy", () => {
  it("uses nonce and strict-dynamic in production without unsafe-inline scripts", () => {
    const csp = buildContentSecurityPolicy("abc123", { isDev: false });

    assert.match(csp, /script-src 'self' 'nonce-abc123' 'strict-dynamic'/);
    assert.doesNotMatch(csp, /script-src[^;]*'unsafe-inline'/);
    assert.doesNotMatch(csp, /script-src[^;]*'unsafe-eval'/);
    assert.match(csp, /upgrade-insecure-requests/);
  });

  it("allows unsafe-eval only in development for Next.js tooling", () => {
    const csp = buildContentSecurityPolicy("devnonce", { isDev: true });

    assert.match(csp, /'unsafe-eval'/);
    assert.doesNotMatch(csp, /upgrade-insecure-requests/);
  });

  it("keeps style-src on self and unsafe-inline without style nonces", () => {
    const csp = buildContentSecurityPolicy("style-nonce", { isDev: false });
    assert.match(csp, /style-src 'self' 'unsafe-inline'/);
    assert.doesNotMatch(csp, /style-src[^;]*'nonce-/);
  });

  it("preserves demo form and asset directives", () => {
    const csp = buildContentSecurityPolicy("x", { isDev: false });
    assert.match(csp, /form-action 'self' mailto:/);
    assert.match(csp, /connect-src 'self'/);
    assert.match(csp, /object-src 'none'/);
  });

  it("allows Google and Ads endpoints when analytics is enabled", () => {
    const csp = buildContentSecurityPolicy("x", {
      isDev: false,
      enableAnalytics: true,
    });
    assert.match(csp, /googletagmanager\.com/);
    assert.match(csp, /google-analytics\.com/);
    assert.match(csp, /pagead2\.googlesyndication\.com/);
    assert.match(csp, /googleadservices\.com/);
  });

  it("allows frame-src for Vercel preview toolbar", () => {
    const csp = buildContentSecurityPolicy("x", {
      isDev: false,
      enableAnalytics: true,
    });
    assert.match(csp, /frame-src 'self' https:\/\/vercel\.live/);
  });
});
