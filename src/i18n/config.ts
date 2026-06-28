export const locales = ["de", "en", "fr", "ja", "ko", "pl", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** German-primary countries (CH handled separately in detect-locale). */
export const germanCountryCodes = ["DE", "AT", "LI"] as const;

/** French-primary countries and territories. */
export const frenchCountryCodes = [
  "FR",
  "LU",
  "MC",
  "RE",
  "GP",
  "MQ",
  "GF",
  "PF",
  "NC",
  "YT",
  "PM",
  "WF",
  "BL",
  "MF",
] as const;

/** Japanese market — locale `ja`. */
export const japanCountryCodes = ["JP"] as const;

/** Korean market — locale `ko`. */
export const koreaCountryCodes = ["KR"] as const;

/** Polish market — locale `pl`. */
export const polandCountryCodes = ["PL"] as const;

/** APAC English markets — locale `en`, variant `apac`. */
export const apacEnglishCountryCodes = ["AU"] as const;

/** Singapore — locale `en` or `zh`, variant `apac`. */
export const singaporeCountryCodes = ["SG"] as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** BCP47-ish Open Graph locale tags per site locale. */
export const openGraphLocaleBySiteLocale: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  fr: "fr_FR",
  ja: "ja_JP",
  ko: "ko_KR",
  pl: "pl_PL",
  zh: "zh_SG",
};
