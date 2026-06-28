/** Regional marketing editions — geo-routed in `src/proxy.ts`. */
export const siteVariants = [
  "large-projects",
  "standard-capex",
  "cdmo",
  "apac",
  "japan",
  "korea",
  "poland",
] as const;

export type SiteVariant = (typeof siteVariants)[number];

export const VARIANT_COOKIE = "capcon-site-variant";
export const defaultVariant: SiteVariant = "standard-capex";

const northAmericaCountries = new Set(["US", "CA"]);
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
    label: { de: "CDMO", en: "CDMO", fr: "CDMO" },
    region: { de: "Schweiz", en: "Switzerland", fr: "Suisse" },
  },
  apac: {
    label: {
      en: "APAC CapEx",
      zh: "亚太 CapEx",
      ja: "APAC CapEx",
      ko: "APAC CapEx",
      pl: "APAC CapEx",
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
    label: { ja: "国内 CapEx", en: "Japan CapEx" },
    region: { ja: "日本", en: "Japan" },
  },
  korea: {
    label: { ko: "CapEx 통합", en: "Korea CapEx" },
    region: { ko: "대한민국", en: "South Korea" },
  },
  poland: {
    label: { pl: "CapEx PL", en: "Poland CapEx", de: "CapEx PL" },
    region: { pl: "Polska", en: "Poland", de: "Polen" },
  },
};
