"use client";

import { DollarSign, TrendingUp, Calculator } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ROI_DATA } from "@/lib/constants";

export function RoiSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_50%)]"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="ROI real"
          title="Los números hablan solos."
          subtitle="No es solo tecnología — es dinero que hoy se te escapa."
        />

        <ScrollReveal className="mt-14">
          <div className="legal-panel mx-auto max-w-4xl rounded-2xl p-8 sm:p-10">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <p className="text-lg text-muted">Si un caso de PI promedio vale</p>
                <p className="text-5xl font-bold text-foreground sm:text-6xl">{ROI_DATA.caseValue}</p>
                <p className="text-sm text-muted">en retención</p>
              </div>

              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <div className="space-y-2">
                <p className="text-lg text-muted">Y recuperas {ROI_DATA.casesPerMonth} casos al mes que hoy se pierden...</p>
                <p className="text-4xl font-bold text-success sm:text-5xl">{ROI_DATA.monthlyRecovery}</p>
                <p className="text-sm text-muted">en ingresos adicionales cada mes</p>
              </div>

              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <p className="text-xl font-semibold text-accent-light sm:text-2xl">
                SmartData Legal se paga solo en {ROI_DATA.paybackPeriod}.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3" staggerDelay={0.1}>
          {[
            {
              icon: DollarSign,
              stat: "30–50%",
              label: "de leads se pierden por respuesta lenta",
            },
            {
              icon: TrendingUp,
              stat: "391%",
              label: "más probabilidad de convertir si respondes en <1 minuto",
            },
            {
              icon: Calculator,
              stat: "$0",
              label: "riesgo para ti — piloto de 30 días sin compromiso",
            },
          ].map((item) => (
            <StaggerItem key={item.stat}>
              <div className="card-premium rounded-xl p-5 text-center">
                <item.icon className="mx-auto mb-3 h-5 w-5 text-accent-light" />
                <p className="text-2xl font-bold text-foreground">{item.stat}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
