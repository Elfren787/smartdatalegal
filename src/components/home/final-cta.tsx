"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { getDemoLink, getWhatsAppLink } from "@/lib/demo-link";

export function FinalCta() {
  const demoLink = getDemoLink();
  const whatsappLink = getWhatsAppLink();

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
              En 15 minutos te mostramos cómo recuperar leads que hoy se pierden, aliviar trabajo repetitivo del paralegal y darle a tu equipo visibilidad real.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaButton href={demoLink} variant="primary" className="gap-2">
                Agendar demo (15 min) <ArrowRight className="h-4 w-4" />
              </CtaButton>
              <CtaButton href={whatsappLink} variant="secondary" external className="gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp directo
              </CtaButton>
            </div>

            <p className="mt-5 text-sm font-semibold text-urgency">
              Programa piloto limitado: 3–5 bufetes en Puerto Rico.
            </p>
            <p className="mt-1 text-xs text-muted">
              Demo gratis. Sin compromiso. Configuración incluida.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
