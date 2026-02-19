import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Features } from "@/components/home/features";
import { Bilingual } from "@/components/home/bilingual";
import { SocialProof } from "@/components/home/social-proof";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Solution />
        <Features />
        <Bilingual />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
