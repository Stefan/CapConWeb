import type { Metadata } from "next";

import { HomeStructuredData } from "@/components/seo/home-structured-data";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AudienceSection } from "@/components/sections/audience";
import { CtaSection } from "@/components/sections/cta";
import { EnterpriseSection } from "@/components/sections/enterprise";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { ProductScreensSection } from "@/components/sections/product-screens";
import { SocialProofSection } from "@/components/sections/social-proof";
import { SolutionSection } from "@/components/sections/solution";
import { isLocale, type Locale } from "@/i18n/config";
import { getRequestDictionary } from "@/i18n/get-dictionary";
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

  return (
    <>
      <HomeStructuredData locale={rawLocale as Locale} />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductScreensSection />
        <FeaturesSection />
        <SocialProofSection />
        <AudienceSection />
        <EnterpriseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
