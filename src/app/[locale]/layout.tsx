import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GoogleConsentSync } from "@/components/analytics/google-consent-sync";

import { SetHtmlLang } from "@/components/i18n/set-html-lang";
import { CookieConsentBanner } from "@/components/legal/cookie-consent-banner";
import { SiteProvider } from "@/components/providers/site-provider";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";
import { defaultVariant } from "@/lib/variant";

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

  const dict = getDictionary(rawLocale, defaultVariant);
  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${PRODUCT_NAME}`,
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
  const dict = getDictionary(locale, defaultVariant);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy-950 focus:shadow-lg"
      >
        {dict.a11y.skipToContent}
      </a>
      <SiteProvider
        locale={locale}
        variant={defaultVariant}
        dict={dict}
        basePath={`/${locale}`}
        showEditionBadge={false}
      >
        {children}
        <CookieConsentBanner />
        <GoogleConsentSync />
      </SiteProvider>
    </>
  );
}
