import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { detectLocale } from "../src/i18n/detect-locale";
import { detectVariant } from "../src/lib/variant";

describe("detectLocale", () => {
  it("routes Japan to Japanese", () => {
    assert.equal(detectLocale({ countryCode: "JP" }), "ja");
  });

  it("routes South Korea to Korean", () => {
    assert.equal(detectLocale({ countryCode: "KR" }), "ko");
  });

  it("routes Poland to Polish", () => {
    assert.equal(detectLocale({ countryCode: "PL" }), "pl");
  });

  it("routes Australia to English", () => {
    assert.equal(detectLocale({ countryCode: "AU" }), "en");
  });

  it("routes Singapore to Chinese when browser prefers zh", () => {
    assert.equal(
      detectLocale({ countryCode: "SG", acceptLanguage: "zh-SG,en;q=0.9" }),
      "zh",
    );
  });

  it("routes Singapore to English by default", () => {
    assert.equal(
      detectLocale({ countryCode: "SG", acceptLanguage: "en-SG,en;q=0.9" }),
      "en",
    );
  });

  it("falls back to ja/ko/pl from Accept-Language", () => {
    assert.equal(detectLocale({ acceptLanguage: "ja-JP,en;q=0.8" }), "ja");
    assert.equal(detectLocale({ acceptLanguage: "ko-KR,en;q=0.8" }), "ko");
    assert.equal(detectLocale({ acceptLanguage: "pl-PL,en;q=0.8" }), "pl");
  });
});

describe("detectVariant", () => {
  it("routes APAC countries to apac edition", () => {
    assert.equal(detectVariant({ countryCode: "AU" }), "apac");
    assert.equal(detectVariant({ countryCode: "SG" }), "apac");
  });

  it("routes Japan to japan edition", () => {
    assert.equal(detectVariant({ countryCode: "JP" }), "japan");
  });

  it("routes Korea to korea edition", () => {
    assert.equal(detectVariant({ countryCode: "KR" }), "korea");
  });

  it("routes Poland to poland edition", () => {
    assert.equal(detectVariant({ countryCode: "PL" }), "poland");
  });

  it("routes CDMO EU countries to cdmo edition", () => {
    assert.equal(detectVariant({ countryCode: "CH" }), "cdmo");
    assert.equal(detectVariant({ countryCode: "AT" }), "cdmo");
    assert.equal(detectVariant({ countryCode: "IE" }), "cdmo");
    assert.equal(detectVariant({ countryCode: "NL" }), "cdmo");
  });

  it("routes SAP roll-up countries to sap-rollup edition", () => {
    assert.equal(detectVariant({ countryCode: "DE" }), "sap-rollup");
    assert.equal(detectVariant({ countryCode: "FR" }), "sap-rollup");
    assert.equal(detectVariant({ countryCode: "GB" }), "sap-rollup");
  });

  it("respects query overrides for new editions", () => {
    assert.equal(detectVariant({ queryOverride: "apac" }), "apac");
    assert.equal(detectVariant({ queryOverride: "japan" }), "japan");
    assert.equal(detectVariant({ queryOverride: "korea" }), "korea");
    assert.equal(detectVariant({ queryOverride: "poland" }), "poland");
    assert.equal(detectVariant({ queryOverride: "sap-rollup" }), "sap-rollup");
    assert.equal(detectVariant({ queryOverride: "fmcg-sap" }), "fmcg-sap");
    assert.equal(detectVariant({ queryOverride: "fmcg" }), "fmcg-sap");
  });
});
