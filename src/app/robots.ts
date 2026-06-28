import type { MetadataRoute } from "next";

import { marketingSiteUrl } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${marketingSiteUrl}/sitemap.xml`,
  };
}
