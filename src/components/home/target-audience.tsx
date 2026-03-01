"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { TARGET_AUDIENCE } from "@/lib/constants";
import { getDemoLink } from "@/lib/demo-link";

export function TargetAudience() {
  const demoLink = getDemoLink();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="¿Es para ti?"
          title={TARGET_AUDIENCE.title}
          subtitle={TARGET_AUDIENCE.subtitle}
        />

        <ScrollReveal className="mt-14">
          <div className="legal-panel mx-auto max-w-3xl rounded-2xl p-8 sm:p-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent-light">
              SmartData Legal es para tu firma si...
            </p>

            <StaggerContainer className="space-y-5" staggerDelay={0.08}>
              {TARGET_AUDIENCE.criteria.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <p className="text-base leading-relaxed text-foreground/90">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 border-t border-border pt-6 text-center">
              <p className="mb-4 text-sm text-muted">
                ¿Te identificas con al menos 2 de estos puntos?
              </p>
              <CtaButton href={demoLink} variant="primary" className="gap-2">
                Sí, quiero ver el demo <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
