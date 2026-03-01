"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ONBOARDING_STEPS } from "@/lib/constants";

export function OnboardingSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Onboarding"
          title="Primeros 30 días: nosotros hacemos el trabajo pesado."
          subtitle="Tú solo recibes leads. Nosotros configuramos, entrenamos y acompañamos."
        />

        <StaggerContainer
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
          staggerDelay={0.12}
        >
          {ONBOARDING_STEPS.map((step, index) => (
            <StaggerItem key={step.day}>
              <div className="card-premium relative h-full rounded-2xl p-6">
                {/* Step connector line on desktop */}
                {index < ONBOARDING_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-gradient-to-r from-accent/40 to-accent/10 sm:block"
                  />
                )}

                <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/12 px-3 py-1 text-xs font-semibold text-accent-light">
                  {step.day}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
