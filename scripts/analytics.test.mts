import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  DEFAULT_GA_MEASUREMENT_ID,
  DEFAULT_GOOGLE_ADS_ID,
  getGaMeasurementId,
  getGoogleAdsId,
  isGoogleAnalyticsEnabled,
  isValidGaMeasurementId,
  isValidGoogleAdsId,
} from "../src/lib/analytics.ts";
import { allowsAnalytics } from "../src/lib/consent.ts";

describe("analytics", () => {
  it("validates GA4 measurement IDs", () => {
    assert.equal(isValidGaMeasurementId("G-ABC123XYZ"), true);
    assert.equal(isValidGaMeasurementId("UA-123456-1"), false);
    assert.equal(isValidGaMeasurementId(""), false);
  });

  it("reads measurement ID from env when valid", () => {
    const previous = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-TEST1234";
    assert.equal(getGaMeasurementId(), "G-TEST1234");
    assert.equal(isGoogleAnalyticsEnabled(), true);
    if (previous === undefined) delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    else process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = previous;
  });

  it("validates Google Ads conversion IDs", () => {
    assert.equal(isValidGoogleAdsId("AW-18304031117"), true);
    assert.equal(isValidGoogleAdsId("G-ABC123XYZ"), false);
    assert.equal(isValidGoogleAdsId(""), false);
  });

  it("reads Google Ads ID from env when valid", () => {
    const previous = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = "AW-99999999999";
    assert.equal(getGoogleAdsId(), "AW-99999999999");
    if (previous === undefined) delete process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    else process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = previous;
  });

  it("falls back to the production Google Ads ID when env is unset", () => {
    const previous = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    delete process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    assert.equal(getGoogleAdsId(), DEFAULT_GOOGLE_ADS_ID);
    if (previous === undefined) delete process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    else process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = previous;
  });

  it("falls back to the production measurement ID when env is unset", () => {
    const previous = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    assert.equal(getGaMeasurementId(), DEFAULT_GA_MEASUREMENT_ID);
    assert.equal(isGoogleAnalyticsEnabled(), true);
    if (previous === undefined) delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    else process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = previous;
  });
});

describe("allowsAnalytics", () => {
  it("grants analytics only for full consent", () => {
    assert.equal(allowsAnalytics(null), false);
    assert.equal(allowsAnalytics("essential"), false);
    assert.equal(allowsAnalytics("all"), true);
  });
});
