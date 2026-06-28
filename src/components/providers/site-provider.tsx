"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";
import { appLoginUrl, appSignupUrl, contactEmail, PRODUCT_NAME } from "@/lib/brand";
import {
  localizedEditionText,
  variantEditionMeta,
  type SiteVariant,
} from "@/lib/variant";

type SiteContextValue = {
  locale: Locale;
  variant: SiteVariant;
  editionLabel: string;
  editionRegion: string;
  dict: SiteDictionary;
  brandLine: string;
  demoUrl: string;
  appLoginUrl: string;
  appSignupUrl: string;
  contactEmail: string;
  navLinks: Array<{ label: string; href: string }>;
};

const SiteContext = createContext<SiteContextValue | null>(null);

type SiteProviderProps = {
  locale: Locale;
  variant: SiteVariant;
  dict: SiteDictionary;
  children: ReactNode;
};

export function SiteProvider({ locale, variant, dict, children }: SiteProviderProps) {
  const meta = variantEditionMeta[variant];
  const brandLine = `${PRODUCT_NAME} – ${dict.tagline}`;

  const value: SiteContextValue = {
    locale,
    variant,
    editionLabel: localizedEditionText(meta.label, locale),
    editionRegion: localizedEditionText(meta.region, locale),
    dict,
    brandLine,
    demoUrl: `/${locale}/demo`,
    appLoginUrl,
    appSignupUrl,
    contactEmail,
    navLinks: [
      { label: dict.nav.problem, href: `/${locale}#problem` },
      { label: dict.nav.solution, href: `/${locale}#solution` },
      { label: dict.nav.features, href: `/${locale}#features` },
      { label: dict.nav.audience, href: `/${locale}#audience` },
      { label: dict.nav.enterprise, href: `/${locale}#enterprise` },
    ],
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
