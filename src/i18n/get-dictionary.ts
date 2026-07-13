import { cookies } from "next/headers";

import type { Locale } from "@/i18n/config";
import de from "@/i18n/dictionaries/de";
import en from "@/i18n/dictionaries/en";
import es from "@/i18n/dictionaries/es";
import fr from "@/i18n/dictionaries/fr";
import ja from "@/i18n/dictionaries/ja";
import ko from "@/i18n/dictionaries/ko";
import pl from "@/i18n/dictionaries/pl";
import zh from "@/i18n/dictionaries/zh";
import {
  cookieSettingsLabel,
  footerLegalByLocale,
  legalPagesByLocale,
  socialProofDisclaimerByLocale,
} from "@/i18n/legal/pages";
import { mergeDictionary } from "@/i18n/merge-dictionary";
import type { SiteDictionary } from "@/i18n/types";
import { apacVariant } from "@/i18n/variants/apac";
import { cdmoVariant } from "@/i18n/variants/cdmo";
import { fmcgSapVariant } from "@/i18n/variants/fmcg-sap";
import { japanVariant } from "@/i18n/variants/japan";
import { koreaVariant } from "@/i18n/variants/korea";
import { largeProjectsVariant } from "@/i18n/variants/large-projects";
import { polandVariant } from "@/i18n/variants/poland";
import { sapRollupVariant } from "@/i18n/variants/sap-rollup";
import {
  VARIANT_COOKIE,
  defaultVariant,
  resolveSiteVariant,
  type SiteVariant,
} from "@/lib/variant";

const rawDictionaries = { de, en, es, fr, ja, ko, pl, zh } as const;

function enrichLaunchCompliance(dict: SiteDictionary, locale: Locale): SiteDictionary {
  const footerLegal = footerLegalByLocale[locale];
  return {
    ...dict,
    footer: {
      ...dict.footer,
      cookies: footerLegal.cookies,
      terms: footerLegal.terms,
      accessibility: footerLegal.accessibility,
      cookieSettings: cookieSettingsLabel[locale],
    },
    legalPages: legalPagesByLocale[locale],
    socialProofDisclaimer: socialProofDisclaimerByLocale[locale],
  };
}

const baseDictionaries: Record<Locale, SiteDictionary> = {
  de: enrichLaunchCompliance(de as unknown as SiteDictionary, "de"),
  en: enrichLaunchCompliance(en as unknown as SiteDictionary, "en"),
  es: enrichLaunchCompliance(es as unknown as SiteDictionary, "es"),
  fr: enrichLaunchCompliance(fr as unknown as SiteDictionary, "fr"),
  ja: enrichLaunchCompliance(ja as unknown as SiteDictionary, "ja"),
  ko: enrichLaunchCompliance(ko as unknown as SiteDictionary, "ko"),
  pl: enrichLaunchCompliance(pl as unknown as SiteDictionary, "pl"),
  zh: enrichLaunchCompliance(zh as unknown as SiteDictionary, "zh"),
};

const variantPatches: Record<
  SiteVariant,
  Partial<Record<Locale, Partial<SiteDictionary>>> | null
> = {
  "large-projects": largeProjectsVariant,
  "standard-capex": null,
  cdmo: cdmoVariant,
  "sap-rollup": sapRollupVariant,
  "fmcg-sap": fmcgSapVariant,
  apac: apacVariant,
  japan: japanVariant,
  korea: koreaVariant,
  poland: polandVariant,
};

function resolveVariantPatch(
  variant: SiteVariant,
  locale: Locale,
): Partial<SiteDictionary> | undefined {
  const patches = variantPatches[variant];
  if (!patches) {
    return undefined;
  }
  return patches[locale] ?? patches.en;
}

export function getDictionary(
  locale: Locale,
  variant: SiteVariant = defaultVariant,
): SiteDictionary {
  const base = baseDictionaries[locale];
  const patch = resolveVariantPatch(variant, locale);
  if (!patch) {
    return base;
  }
  return enrichLaunchCompliance(mergeDictionary(base, patch), locale);
}

export async function getRequestDictionary(locale: Locale): Promise<SiteDictionary> {
  const cookieStore = await cookies();
  const variant = resolveSiteVariant(cookieStore.get(VARIANT_COOKIE)?.value);
  return getDictionary(locale, variant);
}

export async function getRequestVariant(): Promise<SiteVariant> {
  const cookieStore = await cookies();
  return resolveSiteVariant(cookieStore.get(VARIANT_COOKIE)?.value);
}

export { rawDictionaries };
