"use client";

import { Quote, Server, ShieldCheck, Timer } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/ui/scroll-reveal";
import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Confianza"
          title="Disenado para firmas que no quieren perder otro lead valioso."
        />

        <StaggerContainer className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3" staggerDelay={0.1}>
          {TESTIMONIAL_PLACEHOLDERS.map((item) => (
            <StaggerItem key={item.firm}>
              <div className="card-premium h-full rounded-2xl p-6">
                <Quote className="h-5 w-5 text-accent-light/70" />
                <p className="mt-4 text-sm italic leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{item.firm}</p>
                  <p className="text-xs uppercase tracking-wider text-muted">{item.location}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-14">
          <div className="legal-panel rounded-2xl p-6 sm:p-7">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">Base operativa</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "Acceso seguro para staff" },
                { icon: Timer, label: "Control visual de SLA" },
                { icon: Server, label: "Infraestructura cloud escalable" },
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
