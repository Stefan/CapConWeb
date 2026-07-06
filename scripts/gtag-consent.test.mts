import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { gtagConsentFromLevel, buildGtagInitScript } from "../src/lib/gtag-consent.ts";

describe("gtag consent", () => {
  it("denies storage until full cookie consent", () => {
    assert.deepEqual(gtagConsentFromLevel(null), {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    assert.deepEqual(gtagConsentFromLevel("essential"), {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  });

  it("grants analytics and ad storage after full consent", () => {
    assert.deepEqual(gtagConsentFromLevel("all"), {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "denied",
    });
  });

  it("bootstraps gtag with consent defaults and both tag configs", () => {
    const script = buildGtagInitScript("G-TEST1234", "AW-18304031117");
    assert.match(script, /gtag\('consent','default'/);
    assert.match(script, /gtag\('config','AW-18304031117'\)/);
    assert.match(script, /gtag\('config','G-TEST1234'/);
  });
});
