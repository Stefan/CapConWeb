import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  contactEmail,
  marketingSiteUrl,
  PRODUCT_NAME,
  PRODUCT_TAGLINE,
} from "@/lib/brand";
import type { SiteVariant } from "@/lib/variant";

type HomeStructuredDataProps = {
  locale: Locale;
  variant: SiteVariant;
};

export function HomeStructuredData({ locale, variant }: HomeStructuredDataProps) {
  const dict = getDictionary(locale, variant);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PRODUCT_NAME,
    url: marketingSiteUrl,
    logo: `${marketingSiteUrl}/brand/capcon-icon.png`,
    email: contactEmail,
    description: dict.meta.description,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PRODUCT_NAME,
    alternateName: PRODUCT_TAGLINE,
    url: marketingSiteUrl,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: PRODUCT_NAME,
      url: marketingSiteUrl,
    },
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: dict.meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Demo and pilot pricing — contact sales",
    },
    publisher: {
      "@type": "Organization",
      name: PRODUCT_NAME,
      url: marketingSiteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
    </>
  );
}
