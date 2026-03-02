"use client";

import Image from "next/image";
import { ArrowUpRight, Eye, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ValueGallery() {
  return (
    <section id="proof" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.12),transparent_35%)]"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Prueba visual"
          title="Así se ve tu operación de intake funcionando desde el día uno."
          subtitle="Cola priorizada, intake bilingüe y trazabilidad real para que tu equipo responda más rápido y firme más casos."
        />

        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" staggerDelay={0.1}>
          <StaggerItem>
            <div className="legal-panel group relative overflow-hidden rounded-2xl p-3">
              <Image
                src="/visuals/dashboard-command-center.svg"
                alt="Vista del centro de control de leads en SmartData Legal"
                width={1600}
                height={980}
                className="w-full rounded-xl border border-border/70"
                priority
              />
              <div className="pointer-events-none absolute right-6 top-6 rounded-full border border-accent/30 bg-accent/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-light">
                Panel operativo en vivo
              </div>
            </div>
          </StaggerItem>

          <div className="grid gap-6">
            <StaggerItem>
              <div className="card-premium rounded-2xl p-3">
                <Image
                  src="/visuals/intake-mobile-bilingual.svg"
                  alt="Flujo de intake bilingüe en móvil"
                  width={1200}
                  height={980}
                  className="w-full rounded-xl border border-border/70"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card-premium rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground/90">
                  <Eye className="h-4 w-4 text-accent-light" />
                  Valor inmediato para el despacho
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-muted">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-success" />
                    El cliente completa intake estructurado desde el primer minuto.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 text-accent-light" />
                    La IA entrega resumen y prioridad para que el paralegal responda rápido.
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 text-accent-light" />
                    El abogado recibe contexto claro para decidir y avanzar consulta.
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
