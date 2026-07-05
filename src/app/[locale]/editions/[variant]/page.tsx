import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingHome } from "@/components/marketing/marketing-home";
import { HomeStructuredData } from "@/components/seo/home-structured-data";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";
import {
  buildEditionPageMetadata,
  isSeoEditionVariant,
  seoEditionVariants,
  type SeoEditionVariant,
} from "@/lib/seo";
import { type SiteVariant } from "@/lib/variant";

type EditionPageProps = {
  params: Promise<{ locale: string; variant: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    seoEditionVariants.map((variant) => ({ locale, variant })),
  );
}

export async function generateMetadata({
  params,
}: EditionPageProps): Promise<Metadata> {
  const { locale: rawLocale, variant: rawVariant } = await params;
  if (!isLocale(rawLocale) || !isSeoEditionVariant(rawVariant)) {
    return { title: PRODUCT_NAME };
  }

  const dict = getDictionary(rawLocale, rawVariant as SiteVariant);
  return buildEditionPageMetadata(rawLocale, rawVariant, {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraphLocale: dict.meta.openGraphLocale,
    keywords: dict.meta.keywords,
    absoluteTitle: true,
  });
}

export default async function EditionPage({ params }: EditionPageProps) {
  const { locale: rawLocale, variant: rawVariant } = await params;
  if (!isLocale(rawLocale) || !isSeoEditionVariant(rawVariant)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const variant = rawVariant as SeoEditionVariant;

  return (
    <>
      <HomeStructuredData locale={locale} variant={variant} />
      <MarketingHome />
    </>
  );
}
