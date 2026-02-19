import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ValueGallery } from "@/components/home/value-gallery";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Features } from "@/components/home/features";
import { OpsLayouts } from "@/components/home/ops-layouts";
import { Bilingual } from "@/components/home/bilingual";
import { SocialProof } from "@/components/home/social-proof";
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
        <Solution />
        <Features />
        <OpsLayouts />
        <Bilingual />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
