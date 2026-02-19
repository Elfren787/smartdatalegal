"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { getDemoLink } from "@/lib/demo-link";

export function FinalCta() {
  const demoLink = getDemoLink();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Accent gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            See it in action with your own cases.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Book a 15-minute demo. We will show you exactly how SmartData Legal
            would work for your firm &mdash; with your case types, in your
            language.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <CtaButton href={demoLink} variant="primary">
              Schedule Your Demo
            </CtaButton>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free demo. No commitment. Live walkthrough with your team.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
