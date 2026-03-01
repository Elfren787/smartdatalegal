"use client";

import { Rocket, Server, ShieldCheck, Timer, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { PILOT_BENEFITS, INDUSTRY_STATS } from "@/lib/constants";
import { getDemoLink } from "@/lib/demo-link";

export function SocialProof() {
  const demoLink = getDemoLink();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Programa Piloto"
          title="Aceptando 3–5 bufetes en Puerto Rico."
          subtitle="Configuración incluida. 30 días para ver resultados reales. Sin compromiso."
        />

        {/* Industry stats */}
        <ScrollReveal className="mt-14">
          <div className="legal-panel rounded-2xl p-6 sm:p-7">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Lo que dicen los datos de la industria legal
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {INDUSTRY_STATS.map((stat) => (
                <div key={stat.value} className="rounded-xl border border-border bg-background/35 px-4 py-5 text-center">
                  <p className="text-2xl font-bold text-accent-light">{stat.value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Pilot benefits */}
        <StaggerContainer className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3" staggerDelay={0.1}>
          {PILOT_BENEFITS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-premium h-full rounded-2xl p-6">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Scarcity CTA */}
        <ScrollReveal className="mt-10">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold text-urgency">
              Espacios limitados — cerramos nuevas incorporaciones al alcanzar capacidad.
            </p>
            <CtaButton href={demoLink} variant="primary" className="gap-2">
              <Rocket className="h-4 w-4" /> Reservar mi espacio
            </CtaButton>
          </div>
        </ScrollReveal>

        {/* Trust indicators */}
        <ScrollReveal className="mt-14">
          <div className="legal-panel rounded-2xl p-6 sm:p-7">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">Base operativa</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Datos encriptados y privados" },
                { icon: Timer, label: "Control visual de SLA" },
                { icon: Server, label: "Cloud seguro y escalable" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-background/35 px-4 py-4 text-center">
                  <item.icon className="mx-auto mb-2 h-4 w-4 text-accent-light" />
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
