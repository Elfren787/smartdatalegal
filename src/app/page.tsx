import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ValueGallery } from "@/components/home/value-gallery";
import { Problem } from "@/components/home/problem";
import { RoiSection } from "@/components/home/roi-section";
import { Solution } from "@/components/home/solution";
import { Features } from "@/components/home/features";
import { TargetAudience } from "@/components/home/target-audience";
import { OpsLayouts } from "@/components/home/ops-layouts";
import { Bilingual } from "@/components/home/bilingual";
import { OnboardingSection } from "@/components/home/onboarding-section";
import { SocialProof } from "@/components/home/social-proof";
import { FounderSection } from "@/components/home/founder-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <StatsBar />
        <ValueGallery />
        <Problem />
        <RoiSection />
        <Solution />
        <Features />
        <TargetAudience />
        <OpsLayouts />
        <Bilingual />
        <OnboardingSection />
        <SocialProof />
        <FounderSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
