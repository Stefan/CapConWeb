import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { NextRequest } from "next/server";

import { proxy } from "../src/proxy.ts";

describe("proxy CSP", () => {
  it("sets response CSP without forwarding per-request dynamic headers", () => {
    const request = new NextRequest("https://capconhq.com/de");
    const response = proxy(request);

    const csp = response.headers.get("Content-Security-Policy") ?? "";

    assert.match(csp, /script-src 'self'/);
    assert.match(csp, /'strict-dynamic'/);
    assert.doesNotMatch(csp, /'nonce-/);
    assert.equal(response.headers.get("x-middleware-request-x-nonce"), null);
    assert.equal(response.headers.get("x-middleware-request-x-pathname"), null);
  });
});
