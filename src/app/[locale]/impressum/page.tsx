import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return { title: PRODUCT_NAME };
  const dict = getDictionary(rawLocale);
  return { title: dict.legalPages.impressum.title };
}

export default async function ImpressumPage({ params }: LegalPageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return null;
  const dict = getDictionary(rawLocale);

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[60vh] bg-white">
        <LegalDocument
          title={dict.legalPages.impressum.title}
          sections={dict.legalPages.impressum.sections}
          backLabel={dict.demo.backHome}
          backHref={`/${rawLocale}`}
        />
      </main>
      <Footer />
    </>
  );
}
