import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  DEFAULT_GA_MEASUREMENT_ID,
  DEFAULT_GOOGLE_ADS_ID,
  DEFAULT_GTM_CONTAINER_ID,
  DEFAULT_LINKEDIN_PARTNER_ID,
  getGaMeasurementId,
  getGoogleAdsId,
  getGtmContainerId,
  getLinkedInPartnerId,
  isGoogleAnalyticsEnabled,
  isGoogleTagManagerEnabled,
  isLinkedInInsightEnabled,
  isMarketingAnalyticsEnabled,
  isValidGaMeasurementId,
  isValidGoogleAdsId,
  isValidGtmContainerId,
  isValidLinkedInPartnerId,
} from "../src/lib/analytics.ts";
import { allowsAnalytics } from "../src/lib/consent.ts";
import { buildGtmInitScript, gtmNoscriptUrl } from "../src/lib/gtm.ts";
import {
  LINKEDIN_INSIGHT_SCRIPT_SRC,
  buildLinkedInInsightInitScript,
  linkedInCollectPixelUrl,
} from "../src/lib/linkedin-insight.ts";

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

  it("validates GTM container IDs", () => {
    assert.equal(isValidGtmContainerId("GTM-KW5T7S7Q"), true);
    assert.equal(isValidGtmContainerId("G-BYVNSRDQRC"), false);
    assert.equal(isValidGtmContainerId(""), false);
  });

  it("falls back to the production GTM container ID when env is unset", () => {
    const previous = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
    delete process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
    assert.equal(getGtmContainerId(), DEFAULT_GTM_CONTAINER_ID);
    assert.equal(isGoogleTagManagerEnabled(), true);
    if (previous === undefined) delete process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
    else process.env.NEXT_PUBLIC_GTM_CONTAINER_ID = previous;
  });

  it("builds an SSR GTM bootstrap with Consent Mode and container id", () => {
    const script = buildGtmInitScript("GTM-KW5T7S7Q");
    assert.match(script, /consent','default'/);
    assert.match(script, /GTM-KW5T7S7Q/);
    assert.match(script, /googletagmanager\.com\/gtm\.js/);
    assert.equal(
      gtmNoscriptUrl("GTM-KW5T7S7Q"),
      "https://www.googletagmanager.com/ns.html?id=GTM-KW5T7S7Q",
    );
  });

  it("validates LinkedIn partner IDs", () => {
    assert.equal(isValidLinkedInPartnerId("9391730"), true);
    assert.equal(isValidLinkedInPartnerId("abc"), false);
    assert.equal(isValidLinkedInPartnerId(""), false);
  });

  it("falls back to the production LinkedIn partner ID when env is unset", () => {
    const previous = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    delete process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    assert.equal(getLinkedInPartnerId(), DEFAULT_LINKEDIN_PARTNER_ID);
    assert.equal(isLinkedInInsightEnabled(), true);
    assert.equal(isMarketingAnalyticsEnabled(), true);
    if (previous === undefined) delete process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
    else process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID = previous;
  });

  it("builds an SSR Insight Tag bootstrap with partner markers and consent gate", () => {
    const script = buildLinkedInInsightInitScript("9391730");
    // Bare global like Campaign Manager (not window._linkedin_partner_id)
    assert.match(script, /(?<![.\w])_linkedin_partner_id="9391730"/);
    assert.match(script, /_linkedin_data_partner_ids\.push\(_linkedin_partner_id\)/);
    assert.match(script, new RegExp(LINKEDIN_INSIGHT_SCRIPT_SRC.replace(/\./g, "\\.")));
    assert.match(script, /capcon-cookie-consent=all/);
    assert.match(script, /\(function\(l\)\{/);
    assert.equal(
      linkedInCollectPixelUrl("9391730"),
      "https://px.ads.linkedin.com/collect/?pid=9391730&fmt=gif",
    );
  });
});

describe("allowsAnalytics", () => {
  it("grants analytics only for full consent", () => {
    assert.equal(allowsAnalytics(null), false);
    assert.equal(allowsAnalytics("essential"), false);
    assert.equal(allowsAnalytics("all"), true);
  });
});
