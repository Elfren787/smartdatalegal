"use client";

import { GradientBg } from "@/components/ui/gradient-bg";
import { CtaButton } from "@/components/ui/cta-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getDemoLink } from "@/lib/demo-link";

export function Hero() {
  const demoLink = getDemoLink();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-32">
      <GradientBg />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal delay={0.1}>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 backdrop-blur-sm">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />
            <span className="text-sm font-medium text-foreground/80">
              Accepting Puerto Rico Law Firms
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your ads bring the leads.{" "}
            <span className="text-accent-light">
              We make sure you never lose one.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            SmartData Legal automates client intake so your firm responds in
            under 60 seconds &mdash; bilingual, AI-powered, and integrated with
            the tools you already use.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaButton href={demoLink} variant="primary">
              Book Your Free Demo
            </CtaButton>
            <CtaButton href="#how-it-works" variant="secondary">
              See How It Works
            </CtaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
