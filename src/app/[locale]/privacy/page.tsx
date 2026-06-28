import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { isLocale, openGraphLocaleBySiteLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";
import { buildPageMetadata } from "@/lib/seo";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return { title: PRODUCT_NAME };
  const dict = getDictionary(rawLocale);
  const page = dict.legalPages.privacy;
  return buildPageMetadata(rawLocale, "/privacy", {
    title: page.title,
    description: `${page.title} — ${PRODUCT_NAME}`,
    openGraphLocale: openGraphLocaleBySiteLocale[rawLocale as Locale],
  });
}

export default async function PrivacyPage({ params }: LegalPageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return null;
  const dict = getDictionary(rawLocale);

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[60vh] bg-white">
        <LegalDocument
          title={dict.legalPages.privacy.title}
          sections={dict.legalPages.privacy.sections}
          backLabel={dict.demo.backHome}
          backHref={`/${rawLocale}`}
        />
      </main>
      <Footer />
    </>
  );
}
