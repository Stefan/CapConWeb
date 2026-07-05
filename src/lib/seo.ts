import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { marketingSiteUrl, PRODUCT_NAME } from "@/lib/brand";
import {
  defaultVariant,
  isSiteVariant,
  type SiteVariant,
} from "@/lib/variant";

/** Public marketing routes included in the sitemap. */
export const marketingSubpaths = [
  "",
  "/demo",
  "/impressum",
  "/privacy",
  "/cookies",
  "/terms",
  "/accessibility",
] as const;

export type MarketingSubpath = (typeof marketingSubpaths)[number];

/** Indexable edition landing pages — stable URLs for segment SEO. */
export const indexableEditionVariants = [
  "large-projects",
  "cdmo",
  "sap-rollup",
  "apac",
  "japan",
  "korea",
  "poland",
] as const satisfies readonly SiteVariant[];

/** Sales / campaign editions — canonical path but excluded from sitemap. */
export const noindexEditionVariants = ["fmcg-sap"] as const satisfies readonly SiteVariant[];

export const seoEditionVariants = [
  ...indexableEditionVariants,
  ...noindexEditionVariants,
] as const;

export type SeoEditionVariant = (typeof seoEditionVariants)[number];

export function isSeoEditionVariant(
  value: string | null | undefined,
): value is SeoEditionVariant {
  return seoEditionVariants.includes(value as SeoEditionVariant);
}

/** BCP 47 hreflang tags (preferred over bare locale codes). */
export const hreflangByLocale: Record<Locale, string> = {
  de: "de-DE",
  en: "en-US",
  fr: "fr-FR",
  ja: "ja-JP",
  ko: "ko-KR",
  pl: "pl-PL",
  zh: "zh-SG",
};

export type PageMetadataInput = {
  title: string;
  description: string;
  openGraphLocale: string;
  keywords?: readonly string[];
  /** Use for homepage titles that already include the brand name. */
  absoluteTitle?: boolean;
  /** When set, adds noindex (campaign / query-consolidation pages). */
  noindex?: boolean;
};

export function localizedPath(locale: Locale, subpath: MarketingSubpath): string {
  return subpath === "" ? `/${locale}` : `/${locale}${subpath}`;
}

export function localizedEditionPath(locale: Locale, variant: SeoEditionVariant): string {
  return `/${locale}/editions/${variant}`;
}

const editionPathPattern = /^\/([a-z]{2})\/editions\/([^/]+)\/?$/;

/** Parse `/de/editions/sap-rollup` → variant when valid. */
export function parseEditionVariantFromPathname(
  pathname: string,
): SeoEditionVariant | null {
  const match = pathname.match(editionPathPattern);
  if (!match) return null;
  const variant = match[2];
  return isSeoEditionVariant(variant) ? variant : null;
}

export function buildHreflangLanguages(
  subpath: MarketingSubpath,
): Record<string, string> {
  return Object.fromEntries([
    ...locales.map((locale) => [hreflangByLocale[locale], localizedPath(locale, subpath)]),
    ["x-default", localizedPath(defaultLocale, subpath)],
  ]);
}

export function buildEditionHreflangLanguages(
  variant: SeoEditionVariant,
): Record<string, string> {
  return Object.fromEntries([
    ...locales.map((locale) => [
      hreflangByLocale[locale],
      localizedEditionPath(locale, variant),
    ]),
    ["x-default", localizedEditionPath(defaultLocale, variant)],
  ]);
}

export function buildSitemapHreflangLanguages(
  subpath: MarketingSubpath,
): Record<string, string> {
  const base = marketingSiteUrl;
  return Object.fromEntries([
    ...locales.map((locale) => [
      hreflangByLocale[locale],
      `${base}${localizedPath(locale, subpath)}`,
    ]),
    ["x-default", `${base}${localizedPath(defaultLocale, subpath)}`],
  ]);
}

export function buildEditionSitemapHreflangLanguages(
  variant: SeoEditionVariant,
): Record<string, string> {
  const base = marketingSiteUrl;
  return Object.fromEntries([
    ...locales.map((locale) => [
      hreflangByLocale[locale],
      `${base}${localizedEditionPath(locale, variant)}`,
    ]),
    ["x-default", `${base}${localizedEditionPath(defaultLocale, variant)}`,
    ],
  ]);
}

export function buildPageMetadata(
  locale: Locale,
  subpath: MarketingSubpath,
  input: PageMetadataInput,
): Metadata {
  const path = localizedPath(locale, subpath);

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    ...(input.keywords?.length ? { keywords: [...input.keywords] } : {}),
    ...(input.noindex
      ? { robots: { index: false, follow: true } }
      : {}),
    alternates: {
      canonical: path,
      languages: buildHreflangLanguages(subpath),
    },
    openGraph: {
      title: input.title,
      description: input.description,
      locale: input.openGraphLocale,
      type: "website",
      siteName: PRODUCT_NAME,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: ["/opengraph-image"],
    },
  };
}

export function buildEditionPageMetadata(
  locale: Locale,
  variant: SeoEditionVariant,
  input: PageMetadataInput,
): Metadata {
  const path = localizedEditionPath(locale, variant);
  const noindex =
    input.noindex ?? noindexEditionVariants.includes(variant as (typeof noindexEditionVariants)[number]);

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    ...(input.keywords?.length ? { keywords: [...input.keywords] } : {}),
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: path,
      languages: buildEditionHreflangLanguages(variant),
    },
    openGraph: {
      title: input.title,
      description: input.description,
      locale: input.openGraphLocale,
      type: "website",
      siteName: PRODUCT_NAME,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: ["/opengraph-image"],
    },
  };
}

/** Redirect geo/query variant overrides to stable edition URLs (SEO consolidation). */
export function queryVariantToEditionPath(
  locale: Locale,
  queryVariant: string | null,
): string | null {
  if (!queryVariant || !isSiteVariant(queryVariant)) return null;
  if (queryVariant === defaultVariant) return null;
  if (!isSeoEditionVariant(queryVariant)) return null;
  return localizedEditionPath(locale, queryVariant);
}
