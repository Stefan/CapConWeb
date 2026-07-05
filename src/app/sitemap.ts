import type { MetadataRoute } from "next";

import { marketingSiteUrl } from "@/lib/brand";
import {
  buildEditionSitemapHreflangLanguages,
  buildSitemapHreflangLanguages,
  indexableEditionVariants,
  localizedEditionPath,
  localizedPath,
  marketingSubpaths,
} from "@/lib/seo";
import { locales, type Locale } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = marketingSiteUrl;

  const coreEntries = locales.flatMap((locale) =>
    marketingSubpaths.map((subpath) => ({
      url: `${base}${localizedPath(locale, subpath)}`,
      lastModified: new Date(),
      changeFrequency: subpath === "" ? ("weekly" as const) : ("monthly" as const),
      priority: subpath === "" ? 1 : 0.6,
      alternates: {
        languages: buildSitemapHreflangLanguages(subpath),
      },
    })),
  );

  const editionEntries = locales.flatMap((locale) =>
    indexableEditionVariants.map((variant) => ({
      url: `${base}${localizedEditionPath(locale as Locale, variant)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
      alternates: {
        languages: buildEditionSitemapHreflangLanguages(variant),
      },
    })),
  );

  return [...coreEntries, ...editionEntries];
}
