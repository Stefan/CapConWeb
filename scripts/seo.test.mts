import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  buildHreflangLanguages,
  buildPageMetadata,
  buildSitemapHreflangLanguages,
  localizedPath,
} from "../src/lib/seo.ts";

describe("buildPageMetadata", () => {
  it("sets per-page canonical on demo subpages", () => {
    const meta = buildPageMetadata("de", "/demo", {
      title: "Demo buchen",
      description: "Demo anfragen.",
      openGraphLocale: "de_DE",
    });

    assert.equal(meta.alternates?.canonical, "/de/demo");
    assert.equal(meta.openGraph?.url, "/de/demo");
  });

  it("sets hreflang alternates for the same subpath across locales", () => {
    const languages = buildHreflangLanguages("/demo");

    assert.equal(languages.en, "/en/demo");
    assert.equal(languages.de, "/de/demo");
    assert.equal(languages.fr, "/fr/demo");
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

describe("buildSitemapHreflangLanguages", () => {
  it("emits absolute URLs with x-default", () => {
    const languages = buildSitemapHreflangLanguages("/privacy");

    assert.equal(
      languages["x-default"],
      "https://capconhq.com/en/privacy",
    );
    assert.equal(languages.de, "https://capconhq.com/de/privacy");
  });
});

describe("localizedPath", () => {
  it("maps homepage and subpaths", () => {
    assert.equal(localizedPath("de", ""), "/de");
    assert.equal(localizedPath("en", "/terms"), "/en/terms");
  });
});
