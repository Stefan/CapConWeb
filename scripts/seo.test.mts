import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  buildEditionHreflangLanguages,
  buildEditionPageMetadata,
  buildHreflangLanguages,
  buildPageMetadata,
  buildSitemapHreflangLanguages,
  localizedEditionPath,
  localizedPath,
  parseEditionVariantFromPathname,
  queryVariantToEditionPath,
} from "../src/lib/seo.ts";

describe("buildPageMetadata", () => {
  it("sets per-page canonical on demo subpages", () => {
    const meta = buildPageMetadata("de", "/demo", {
      title: "Demo anfragen",
      description: "Demo anfragen.",
      openGraphLocale: "de_DE",
    });

    assert.equal(meta.alternates?.canonical, "/de/demo");
    assert.equal(meta.openGraph?.url, "/de/demo");
  });

  it("sets BCP47 hreflang alternates for the same subpath across locales", () => {
    const languages = buildHreflangLanguages("/demo");

    assert.equal(languages["en-US"], "/en/demo");
    assert.equal(languages["de-DE"], "/de/demo");
    assert.equal(languages["fr-FR"], "/fr/demo");
    assert.equal(languages["es"], "/es/demo");
  });

  it("includes x-default pointing at the default locale version", () => {
    const languages = buildHreflangLanguages("/demo");

    assert.equal(languages["x-default"], "/en/demo");
  });

  it("uses absolute title on the homepage", () => {
    const meta = buildPageMetadata("de", "", {
      title: "CapCon – Capex",
      description: "Homepage description.",
      openGraphLocale: "de_DE",
      absoluteTitle: true,
    });

    assert.deepEqual(meta.title, { absolute: "CapCon – Capex" });
    assert.equal(meta.alternates?.canonical, "/de");
  });
});

describe("buildEditionPageMetadata", () => {
  it("sets edition canonical and hreflang per variant", () => {
    const meta = buildEditionPageMetadata("de", "sap-rollup", {
      title: "CapCon – SAP Roll-up",
      description: "SAP roll-up edition.",
      openGraphLocale: "de_DE",
      absoluteTitle: true,
    });

    assert.equal(meta.alternates?.canonical, "/de/editions/sap-rollup");
    assert.equal(
      meta.alternates?.languages?.["en-US"],
      "/en/editions/sap-rollup",
    );
  });

  it("noindexes campaign editions like fmcg-sap", () => {
    const meta = buildEditionPageMetadata("en", "fmcg-sap", {
      title: "CapCon – FMCG",
      description: "FMCG edition.",
      openGraphLocale: "en_US",
    });

    assert.deepEqual(meta.robots, { index: false, follow: true });
  });
});

describe("buildEditionHreflangLanguages", () => {
  it("links the same variant across locales", () => {
    const languages = buildEditionHreflangLanguages("cdmo");

    assert.equal(languages["de-DE"], "/de/editions/cdmo");
    assert.equal(languages["x-default"], "/en/editions/cdmo");
  });
});

describe("buildSitemapHreflangLanguages", () => {
  it("emits absolute URLs with x-default", () => {
    const languages = buildSitemapHreflangLanguages("/privacy");

    assert.equal(
      languages["x-default"],
      "https://capconhq.com/en/privacy",
    );
    assert.equal(languages["de-DE"], "https://capconhq.com/de/privacy");
  });
});

describe("localizedPath", () => {
  it("maps homepage and subpaths", () => {
    assert.equal(localizedPath("de", ""), "/de");
    assert.equal(localizedPath("en", "/terms"), "/en/terms");
  });
});

describe("localizedEditionPath", () => {
  it("maps edition landing paths", () => {
    assert.equal(localizedEditionPath("de", "sap-rollup"), "/de/editions/sap-rollup");
  });
});

describe("parseEditionVariantFromPathname", () => {
  it("parses valid edition paths", () => {
    assert.equal(parseEditionVariantFromPathname("/de/editions/sap-rollup"), "sap-rollup");
    assert.equal(parseEditionVariantFromPathname("/en/editions/cdmo"), "cdmo");
    assert.equal(parseEditionVariantFromPathname("/de/demo"), null);
  });
});

describe("queryVariantToEditionPath", () => {
  it("maps indexable query variants to edition URLs", () => {
    assert.equal(
      queryVariantToEditionPath("de", "sap-rollup"),
      "/de/editions/sap-rollup",
    );
    assert.equal(queryVariantToEditionPath("en", "standard-capex"), null);
    assert.equal(queryVariantToEditionPath("en", "invalid"), null);
  });
});
