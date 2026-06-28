import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { marketingSiteUrl, PRODUCT_NAME } from "@/lib/brand";

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

export type PageMetadataInput = {
  title: string;
  description: string;
  openGraphLocale: string;
  keywords?: readonly string[];
  /** Use for homepage titles that already include the brand name. */
  absoluteTitle?: boolean;
};

export function localizedPath(locale: Locale, subpath: MarketingSubpath): string {
  return subpath === "" ? `/${locale}` : `/${locale}${subpath}`;
}

export function buildHreflangLanguages(
  subpath: MarketingSubpath,
): Record<string, string> {
  return Object.fromEntries([
    ...locales.map((locale) => [locale, localizedPath(locale, subpath)]),
    ["x-default", localizedPath(defaultLocale, subpath)],
  ]);
}

export function buildSitemapHreflangLanguages(
  subpath: MarketingSubpath,
): Record<string, string> {
  const base = marketingSiteUrl;
  return Object.fromEntries([
    ...locales.map((locale) => [
      locale,
      `${base}${localizedPath(locale, subpath)}`,
    ]),
    ["x-default", `${base}${localizedPath(defaultLocale, subpath)}`],
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
