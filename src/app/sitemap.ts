import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { marketingSiteUrl } from "@/lib/brand";

const subpaths = ["", "/demo", "/impressum", "/privacy", "/cookies", "/terms", "/accessibility"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = marketingSiteUrl;

  return locales.flatMap((locale) =>
    subpaths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}${path}`]),
        ),
      },
    })),
  );
}
