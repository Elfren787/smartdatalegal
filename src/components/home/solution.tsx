"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { SOLUTION_STEPS } from "@/lib/constants";

export function Solution() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="How It Works"
          title="From lead to action-ready case in three steps."
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-base italic text-muted">
          &ldquo;No reemplaza al paralegal &mdash; le quita el trabajo
          repetitivo y le entrega leads listos para accion.&rdquo;
        </p>

        <StaggerContainer
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          staggerDelay={0.15}
        >
          {SOLUTION_STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="group relative rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                {/* Step number */}
                <span className="text-5xl font-bold text-accent/10">
                  {step.step}
                </span>

                {/* Tag */}
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
                    {step.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
