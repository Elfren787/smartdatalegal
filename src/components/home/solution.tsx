"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { SOLUTION_STEPS } from "@/lib/constants";

export function Solution() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Cómo funciona"
          title="Del lead nuevo a una acción legal clara en tres pasos."
        />

        <p className="mx-auto mt-4 max-w-3xl text-center text-base italic text-muted sm:text-lg">
          &ldquo;No reemplaza al paralegal; le quita trabajo repetitivo y entrega leads listos para accionar.&rdquo;
        </p>

        <StaggerContainer
          className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3"
          staggerDelay={0.12}
        >
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />
          {SOLUTION_STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <motion.div whileHover={{ y: -6 }} className="card-premium relative h-full rounded-2xl p-7">
                <div className="absolute right-5 top-5 rounded-lg border border-accent/30 bg-accent/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-light">
                  {step.tag}
                </div>

                <span className="text-6xl font-semibold leading-none text-accent/18">{step.step}</span>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
