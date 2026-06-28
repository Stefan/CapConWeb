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

  it("respects query overrides for new editions", () => {
    assert.equal(detectVariant({ queryOverride: "apac" }), "apac");
    assert.equal(detectVariant({ queryOverride: "japan" }), "japan");
    assert.equal(detectVariant({ queryOverride: "korea" }), "korea");
    assert.equal(detectVariant({ queryOverride: "poland" }), "poland");
  });
});
