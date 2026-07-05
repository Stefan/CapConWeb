import type { Metadata } from "next";

import { MarketingHome } from "@/components/marketing/marketing-home";
import { HomeStructuredData } from "@/components/seo/home-structured-data";
import { isLocale, type Locale } from "@/i18n/config";
import { getRequestDictionary, getRequestVariant } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return { title: PRODUCT_NAME };

  const dict = await getRequestDictionary(rawLocale);
  return buildPageMetadata(rawLocale, "", {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraphLocale: dict.meta.openGraphLocale,
    keywords: dict.meta.keywords,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return null;

  const locale = rawLocale as Locale;
  const variant = await getRequestVariant();

  return (
    <>
      <HomeStructuredData locale={locale} variant={variant} />
      <MarketingHome />
    </>
  );
}
