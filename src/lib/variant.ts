/** Regional marketing editions — geo-routed in `src/proxy.ts`. */
export const siteVariants = [
  "large-projects",
  "standard-capex",
  "cdmo",
  "sap-rollup",
  "fmcg-sap",
  "apac",
  "japan",
  "korea",
  "poland",
] as const;

export type SiteVariant = (typeof siteVariants)[number];

export const VARIANT_COOKIE = "capcon-site-variant";
export const defaultVariant: SiteVariant = "standard-capex";

const northAmericaCountries = new Set(["US", "CA"]);
/** CDMO EU biotech hubs — CH handled separately. */
const cdmoEuCountries = new Set(["AT", "IE", "NL"]);
const sapRollupCountries = new Set(["DE", "FR", "GB"]);
const apacCountries = new Set(["AU", "SG"]);
const japanCountries = new Set(["JP"]);
const koreaCountries = new Set(["KR"]);
const polandCountries = new Set(["PL"]);

import type { Locale } from "@/i18n/config";

type Localized = Partial<Record<Locale, string>>;

export function localizedEditionText(texts: Localized, locale: Locale): string {
  return texts[locale] ?? texts.en ?? Object.values(texts)[0] ?? "";
}

export function isSiteVariant(value: string | null | undefined): value is SiteVariant {
  return siteVariants.includes(value as SiteVariant);
}

/**
 * Resolve marketing edition from query override or geo (legacy / tests).
 * **Homepage routing:** locale homes always use `defaultVariant`; segment copy lives on `/editions/*`.
 */
export function detectVariant(input: {
  countryCode?: string | null;
  queryOverride?: string | null;
}): SiteVariant {
  const override = input.queryOverride?.trim().toLowerCase();
  if (override === "large-projects" || override === "large_projects") {
    return "large-projects";
  }
  if (override === "standard-capex" || override === "standard_capex") {
    return "standard-capex";
  }
  if (override === "cdmo") {
    return "cdmo";
  }
  if (override === "sap-rollup" || override === "sap_rollup") {
    return "sap-rollup";
  }
  if (override === "fmcg-sap" || override === "fmcg_sap" || override === "fmcg") {
    return "fmcg-sap";
  }
  if (override === "apac") {
    return "apac";
  }
  if (override === "japan") {
    return "japan";
  }
  if (override === "korea") {
    return "korea";
  }
  if (override === "poland") {
    return "poland";
  }

  const country = input.countryCode?.trim().toUpperCase();
  if (country && northAmericaCountries.has(country)) {
    return "large-projects";
  }
  if (country === "CH") {
    return "cdmo";
  }
  if (country && cdmoEuCountries.has(country)) {
    return "cdmo";
  }
  if (country && sapRollupCountries.has(country)) {
    return "sap-rollup";
  }
  if (country && japanCountries.has(country)) {
    return "japan";
  }
  if (country && koreaCountries.has(country)) {
    return "korea";
  }
  if (country && polandCountries.has(country)) {
    return "poland";
  }
  if (country && apacCountries.has(country)) {
    return "apac";
  }
  return defaultVariant;
}

export function resolveSiteVariant(cookieValue: string | null | undefined): SiteVariant {
  return isSiteVariant(cookieValue) ? cookieValue : defaultVariant;
}

export const variantEditionMeta: Record<
  SiteVariant,
  { label: Localized; region: Localized }
> = {
  "large-projects": {
    label: { de: "Large Projects", en: "Large Projects", fr: "Large Projects" },
    region: { de: "Nordamerika", en: "North America", fr: "Amérique du Nord" },
  },
  "standard-capex": {
    label: { de: "Standard CapEx", en: "Standard CapEx", fr: "Standard CapEx" },
    region: { de: "International", en: "International", fr: "International" },
  },
  cdmo: {
    label: { de: "GMP Manufacturing", en: "GMP manufacturing", fr: "Manufacturing GMP" },
    region: {
      de: "Europa & Schweiz",
      en: "Europe & Switzerland",
      fr: "Europe & Suisse",
    },
  },
  "sap-rollup": {
    label: {
      de: "Pharma & Diagnostics",
      en: "Pharma & diagnostics",
      fr: "Pharma & diagnostics",
    },
    region: {
      de: "Portfolio-Konsolidierung",
      en: "Portfolio consolidation",
      fr: "Consolidation portefeuille",
    },
  },
  "fmcg-sap": {
    label: {
      de: "Global Manufacturing",
      en: "Global manufacturing",
      fr: "Manufacturing global",
    },
    region: {
      de: "Multi-Site-Programme",
      en: "Multi-site programmes",
      fr: "Programmes multi-sites",
    },
  },
  apac: {
    label: {
      en: "APAC programmes",
      zh: "亚太区项目",
      ja: "APAC programmes",
      ko: "APAC programmes",
      pl: "Programy APAC",
    },
    region: {
      en: "Australia & Singapore",
      zh: "澳大利亚与新加坡",
      ja: "オーストラリア・シンガポール",
      ko: "호주·싱가포르",
      pl: "Australia i Singapur",
    },
  },
  japan: {
    label: { ja: "製造 CapEx", en: "Manufacturing CapEx" },
    region: { ja: "日本", en: "Japan" },
  },
  korea: {
    label: { ko: "산업 CapEx", en: "Industrial CapEx" },
    region: { ko: "대한민국", en: "South Korea" },
  },
  poland: {
    label: { pl: "CapEx PL", en: "Poland CapEx", de: "CapEx PL" },
    region: { pl: "Polska", en: "Poland", de: "Polen" },
  },
};
