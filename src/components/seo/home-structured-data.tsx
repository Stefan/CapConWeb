import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  contactEmail,
  marketingSiteUrl,
  PRODUCT_NAME,
  PRODUCT_TAGLINE,
} from "@/lib/brand";

type HomeStructuredDataProps = {
  locale: Locale;
};

export function HomeStructuredData({ locale }: HomeStructuredDataProps) {
  const dict = getDictionary(locale);

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
    inLanguage: [...locales],
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
    </>
  );
}
