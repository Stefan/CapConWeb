import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  CONSENT_COOKIE,
  allowsAnalytics,
  allowsPersistentVariantCookie,
  isConsentLevel,
  parseConsentLevel,
} from "../src/lib/consent.ts";

describe("consent", () => {
  it("exports stable consent cookie name", () => {
    assert.equal(CONSENT_COOKIE, "capcon-cookie-consent");
  });

  it("isConsentLevel accepts essential and all only", () => {
    assert.equal(isConsentLevel("essential"), true);
    assert.equal(isConsentLevel("all"), true);
    assert.equal(isConsentLevel("analytics"), false);
    assert.equal(isConsentLevel(null), false);
    assert.equal(isConsentLevel(""), false);
  });

  it("parseConsentLevel normalizes valid values", () => {
    assert.equal(parseConsentLevel("all"), "all");
    assert.equal(parseConsentLevel("essential"), "essential");
    assert.equal(parseConsentLevel("rejected"), null);
    assert.equal(parseConsentLevel(undefined), null);
  });

  it("allowsPersistentVariantCookie only after full consent", () => {
    assert.equal(allowsPersistentVariantCookie(null), false);
    assert.equal(allowsPersistentVariantCookie("essential"), false);
    assert.equal(allowsPersistentVariantCookie("all"), true);
  });

  it("allowsAnalytics only after full consent", () => {
    assert.equal(allowsAnalytics(null), false);
    assert.equal(allowsAnalytics("essential"), false);
    assert.equal(allowsAnalytics("all"), true);
  });
});
