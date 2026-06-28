import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { NextRequest } from "next/server";

import { proxy } from "../src/proxy.ts";

describe("proxy CSP nonce", () => {
  it("uses the same nonce in response CSP and forwarded x-nonce header", () => {
    const request = new NextRequest("https://capconhq.com/de");
    const response = proxy(request);

    const csp = response.headers.get("Content-Security-Policy") ?? "";
    const forwardedNonce = response.headers.get("x-middleware-request-x-nonce");
    const forwardedCsp = response.headers.get(
      "x-middleware-request-content-security-policy",
    );

    assert.match(csp, /'nonce-[^']+'/);
    const cspNonce = csp.match(/'nonce-([^']+)'/)?.[1];
    assert.ok(cspNonce, "expected CSP nonce");
    assert.equal(forwardedNonce, cspNonce);
    assert.ok(forwardedCsp?.includes(`'nonce-${cspNonce}'`));
  });
});
