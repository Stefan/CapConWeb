import {
  apacEnglishCountryCodes,
  defaultLocale,
  frenchCountryCodes,
  germanCountryCodes,
  japanCountryCodes,
  koreaCountryCodes,
  polandCountryCodes,
  singaporeCountryCodes,
  type Locale,
} from "@/i18n/config";

type DetectLocaleInput = {
  countryCode?: string | null;
  acceptLanguage?: string | null;
};

function primaryLanguage(acceptLanguage: string | null | undefined): string {
  const first = acceptLanguage?.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.split("-")[0] ?? "";
}

/**
 * Geo + browser language → site locale.
 * New markets: JP→ja, KR→ko, PL→pl, AU→en, SG→zh|en.
 */
export function detectLocale(input: DetectLocaleInput): Locale {
  const country = input.countryCode?.trim().toUpperCase() ?? "";
  const lang = primaryLanguage(input.acceptLanguage);

  if (
    germanCountryCodes.includes(country as (typeof germanCountryCodes)[number])
  ) {
    return "de";
  }

  if (country === "CH") {
    return lang === "fr" ? "fr" : "de";
  }

  if (
    frenchCountryCodes.includes(country as (typeof frenchCountryCodes)[number])
  ) {
    return "fr";
  }

  if (country === "BE") {
    return lang === "fr" ? "fr" : "en";
  }

  if (country === "CA") {
    return lang === "fr" ? "fr" : "en";
  }

  if (japanCountryCodes.includes(country as (typeof japanCountryCodes)[number])) {
    return "ja";
  }

  if (koreaCountryCodes.includes(country as (typeof koreaCountryCodes)[number])) {
    return "ko";
  }

  if (polandCountryCodes.includes(country as (typeof polandCountryCodes)[number])) {
    return "pl";
  }

  if (
    apacEnglishCountryCodes.includes(
      country as (typeof apacEnglishCountryCodes)[number],
    )
  ) {
    return "en";
  }

  if (
    singaporeCountryCodes.includes(
      country as (typeof singaporeCountryCodes)[number],
    )
  ) {
    return lang === "zh" ? "zh" : "en";
  }

  if (lang === "de") return "de";
  if (lang === "fr") return "fr";
  if (lang === "ja") return "ja";
  if (lang === "ko") return "ko";
  if (lang === "pl") return "pl";
  if (lang === "zh") return "zh";

  return defaultLocale;
}
