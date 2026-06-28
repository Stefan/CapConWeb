import type { MetadataRoute } from "next";

import { marketingSiteUrl } from "@/lib/brand";
import {
  buildSitemapHreflangLanguages,
  localizedPath,
  marketingSubpaths,
} from "@/lib/seo";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = marketingSiteUrl;

  return locales.flatMap((locale) =>
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
}
