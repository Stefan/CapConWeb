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
  /** Segment badge — only on `/editions/*`, not on the broad locale home. */
  showEditionBadge: boolean;
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
  /** Marketing base path for in-page anchors (edition landings vs locale home). */
  basePath?: string;
  showEditionBadge?: boolean;
  children: ReactNode;
};

export function SiteProvider({
  locale,
  variant,
  dict,
  basePath,
  showEditionBadge = false,
  children,
}: SiteProviderProps) {
  const meta = variantEditionMeta[variant];
  const brandLine = `${PRODUCT_NAME} – ${dict.tagline}`;
  const marketingBase = basePath ?? `/${locale}`;

  const value: SiteContextValue = {
    locale,
    variant,
    showEditionBadge,
    editionLabel: localizedEditionText(meta.label, locale),
    editionRegion: localizedEditionText(meta.region, locale),
    dict,
    brandLine,
    demoUrl: `/${locale}/demo`,
    appLoginUrl,
    appSignupUrl,
    contactEmail,
    navLinks: [
      { label: dict.nav.problem, href: `${marketingBase}#problem` },
      { label: dict.nav.solution, href: `${marketingBase}#solution` },
      { label: dict.nav.features, href: `${marketingBase}#features` },
      { label: dict.nav.audience, href: `${marketingBase}#audience` },
      { label: dict.nav.enterprise, href: `${marketingBase}#enterprise` },
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
