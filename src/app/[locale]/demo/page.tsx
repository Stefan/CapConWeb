import type { Metadata } from "next";

import { DemoPageContent } from "@/components/demo/demo-page-content";
import { isLocale } from "@/i18n/config";
import { getRequestDictionary } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";

type DemoPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return { title: PRODUCT_NAME };
  const dict = await getRequestDictionary(rawLocale);
  return {
    title: dict.demo.metaTitle,
    description: dict.demo.description,
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  await params;
  return <DemoPageContent />;
}
