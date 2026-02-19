"use client";

import Image from "next/image";
import { CheckCircle2, Clock3, Workflow } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function MetricChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/85">
      {label}
    </span>
  );
}

export function OpsLayouts() {
  return (
    <section id="value" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Resultados"
          title="Diseñado para mejorar conversión y bajar carga operativa del equipo legal."
          subtitle="El valor es operacional: menos leads perdidos, mejor velocidad de contacto y mejor información para decidir."
        />

        <div className="mt-16 space-y-10">
          <ScrollReveal>
            <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="card-premium rounded-2xl p-6 sm:p-7">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
                  <Clock3 className="h-4 w-4" />
                  Infraestructura de respuesta
                </div>
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Mantiene el primer contacto dentro de ventana SLA.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  SmartData Legal muestra leads en riesgo, dispara recordatorios y ayuda al paralegal a priorizar antes de que el lead se enfríe.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <MetricChip label="Riesgo SLA visible" />
                  <MetricChip label="Recordatorios automáticos" />
                  <MetricChip label="Responsable por lead" />
                </div>
              </div>

              <div className="legal-panel rounded-2xl p-3">
                <Image
                  src="/visuals/sla-ops-board.svg"
                  alt="Panel de operaciones SLA con recordatorios y control diario"
                  width={1200}
                  height={900}
                  className="w-full rounded-xl border border-border/70"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="legal-panel order-2 rounded-2xl p-3 lg:order-1">
                <Image
                  src="/visuals/intake-mobile-bilingual.svg"
                  alt="Intake móvil bilingüe con resumen para equipo legal"
                  width={1200}
                  height={980}
                  className="w-full rounded-xl border border-border/70"
                />
              </div>

              <div className="card-premium order-1 rounded-2xl p-6 sm:p-7 lg:order-2">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
                  <Workflow className="h-4 w-4" />
                  Productividad del equipo
                </div>
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Menos caos operativo, más tiempo para trabajo legal de valor.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  El cliente envía datos completos desde el inicio. Paralegales y abogados reciben contexto limpio para actuar rápido y con menos fricción.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" />
                    Intake bilingüe sin carga extra para el staff
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" />
                    Resumen y score de IA por cada lead
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" />
                    Evidencia y documentos ligados al historial del caso
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
