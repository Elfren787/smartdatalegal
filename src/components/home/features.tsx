"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(96,165,250,0.11),transparent_42%)]"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Plataforma"
          title="Hecho para velocidad de intake, claridad legal y ejecucion del equipo."
          subtitle="Funciones reales pensadas para paralegales, abogados y socios que necesitan control operativo."
        />

        <StaggerContainer
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.09}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="card-premium group h-full rounded-2xl p-6"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/12">
                    <Icon className="h-5 w-5 text-accent-light" />
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{feature.description}</p>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
