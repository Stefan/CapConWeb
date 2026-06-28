import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PRODUCT_NAME } from "@/lib/brand";

import type { LegalSection } from "@/i18n/types";

type LegalSubpageProps = {
  params: Promise<{ locale: string }>;
};

type LegalSubpageConfig = {
  titleKey: "cookies" | "terms" | "accessibility";
};

export function createLegalSubpage(config: LegalSubpageConfig) {
  async function generateMetadata({ params }: LegalSubpageProps): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    if (!isLocale(rawLocale)) return { title: PRODUCT_NAME };
    const dict = getDictionary(rawLocale);
    const page = dict.legalPages[config.titleKey]!;
    return { title: page.title };
  }

  async function Page({ params }: LegalSubpageProps) {
    const { locale: rawLocale } = await params;
    if (!isLocale(rawLocale)) return null;
    const dict = getDictionary(rawLocale);
    const page = dict.legalPages[config.titleKey]!;

    return (
      <>
        <Navbar />
        <main id="main-content" className="min-h-[60vh] bg-white">
          <LegalDocument
            title={page.title}
            sections={page.sections as LegalSection[]}
            backLabel={dict.demo.backHome}
            backHref={`/${rawLocale}`}
          />
        </main>
        <Footer />
      </>
    );
  }

  return { generateMetadata, Page };
}
