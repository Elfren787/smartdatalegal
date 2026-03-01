"use client";

import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { getWhatsAppLink } from "@/lib/demo-link";

export function FounderSection() {
  const whatsappLink = getWhatsAppLink();

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="legal-panel mx-auto max-w-3xl rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
              {/* Avatar placeholder — swap with real photo later */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 text-2xl font-bold text-accent-light">
                ER
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-light">
                  Detrás de SmartData Legal
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Elfren Rivera Rios</h3>
                <p className="mt-1 text-sm text-muted">Fundador, SmartData PR</p>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  Construyo herramientas de datos e IA para negocios en Puerto Rico. SmartData Legal nació de ver cómo bufetes locales gastan miles en anuncios pero pierden casos valiosos por no responder a tiempo. Mi meta: que cada lead que entra tenga la mejor oportunidad de convertirse en cliente firmado.
                </p>

                <div className="mt-5">
                  <CtaButton href={whatsappLink} variant="secondary" external className="gap-2">
                    <MessageCircle className="h-4 w-4" /> Habla conmigo directo
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
