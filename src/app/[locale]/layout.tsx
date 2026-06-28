import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SetHtmlLang } from "@/components/i18n/set-html-lang";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { SiteProvider } from "@/components/providers/site-provider";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getRequestDictionary, getRequestVariant } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return { title: PRODUCT_NAME };
  }

  const dict = await getRequestDictionary(rawLocale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${PRODUCT_NAME}`,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    alternates: {
      canonical: `/${rawLocale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.meta.openGraphLocale,
      type: "website",
      siteName: PRODUCT_NAME,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const [dict, variant] = await Promise.all([
    getRequestDictionary(locale),
    getRequestVariant(),
  ]);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy-950 focus:shadow-lg"
      >
        {dict.a11y.skipToContent}
      </a>
      <SiteProvider locale={locale} variant={variant} dict={dict}>
        {children}
        <CookieConsentBanner />
      </SiteProvider>
    </>
  );
}
