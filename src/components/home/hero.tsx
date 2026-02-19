"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Languages, ShieldCheck } from "lucide-react";
import { GradientBg } from "@/components/ui/gradient-bg";
import { CtaButton } from "@/components/ui/cta-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getDemoLink } from "@/lib/demo-link";

const previewRows = [
  { name: "Choque vehicular - San Juan", score: "Alta 91", sla: "En riesgo" },
  { name: "Caída en comercio - Carolina", score: "Media 72", sla: "En tiempo" },
  { name: "Derechos civiles - Bayamón", score: "Alta 84", sla: "Contactado" },
] as const;

export function Hero() {
  const demoLink = getDemoLink();
  const [spot, setSpot] = useState({ x: 42, y: 16 });

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-24"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        setSpot({ x, y });
      }}
    >
      <GradientBg />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(520px circle at ${spot.x}% ${spot.y}%, rgba(96, 165, 250, 0.20), transparent 60%)`,
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollReveal delay={0.08}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/85">
                Aceptando bufetes en Puerto Rico
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              Tus anuncios traen leads.
              <br />
              <span className="text-shine">Nosotros logramos que lleguen primero a tu equipo legal.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              SmartData Legal ejecuta tu intake en inglés y español, y entrega leads clasificados y estructurados para que paralegales y abogados respondan antes de que baje la intención del cliente.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.42}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href={demoLink} variant="primary" className="gap-2">
                Agendar demo gratis <ArrowRight className="h-4 w-4" />
              </CtaButton>
              <CtaButton href="#how-it-works" variant="secondary">
                Ver cómo funciona
              </CtaButton>
            </div>
            <p className="mt-4 text-sm text-muted">15 minutos. Casos reales. Sin compromiso.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.52}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Velocidad", value: "< 60s", icon: Clock3 },
                { label: "Idioma", value: "EN / ES", icon: Languages },
                { label: "Cobertura", value: "24/7", icon: ShieldCheck },
              ].map((item) => (
                <div key={item.label} className="card-premium rounded-xl px-4 py-3">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
                    <item.icon className="h-4 w-4 text-accent-light" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="legal-panel rounded-2xl p-5 sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Centro de control</p>
              <p className="text-lg font-semibold">Cola legal priorizada</p>
            </div>
            <span className="rounded-full border border-success/30 bg-success/12 px-3 py-1 text-xs font-semibold text-success">
              Equipo activo
            </span>
          </div>

          <div className="space-y-3">
            {previewRows.map((row, index) => (
              <motion.div
                key={row.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.12 }}
                className="card-premium rounded-xl p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-foreground/95">{row.name}</p>
                  <span className="rounded-full bg-accent/14 px-2.5 py-1 text-xs font-semibold text-accent-light">
                    {row.score}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-muted">Estado</span>
                  <span
                    className={`font-semibold ${
                      row.sla === "En riesgo" ? "text-urgency" : row.sla === "En tiempo" ? "text-success" : "text-accent-light"
                    }`}
                  >
                    {row.sla}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-border bg-background/40 p-3">
            <div className="mb-1 flex items-center justify-between text-xs text-muted">
              <span>SLA promedio de primer contacto</span>
              <span>00:58</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-accent to-accent-light"
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1.1, delay: 0.45 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
