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

export function MarketingHome() {
  return (
    <>
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
