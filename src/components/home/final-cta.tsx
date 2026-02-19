"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { getDemoLink } from "@/lib/demo-link";

export function FinalCta() {
  const demoLink = getDemoLink();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.2),transparent_60%)]"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <div className="legal-panel rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Mira SmartData Legal funcionando con tus tipos de caso.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              En 15 minutos te mostramos cómo mejorar conversión de leads, aliviar trabajo repetitivo del paralegal y darle a abogados mejor visibilidad para decidir rápido.
            </p>

            <div className="mt-10">
              <CtaButton href={demoLink} variant="primary" className="gap-2">
                Agendar demo <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </div>

            <p className="mt-4 text-sm text-muted">Demo gratis. Sin compromiso. Enfocado en bufetes de Puerto Rico.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
