"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, Clock8, ShieldAlert } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TIMELINE_STEPS, PAIN_POINTS } from "@/lib/constants";

const statusColors = {
  new: "bg-success",
  warning: "bg-amber-400",
  lost: "bg-urgency",
  dead: "bg-muted/45",
} as const;

const statusLabels = {
  new: "Caso recibido",
  warning: "Requiere atención",
  lost: "Competencia ganó",
  dead: "Caso perdido",
} as const;

const icons = [Clock8, ShieldAlert, AlertTriangle] as const;

function TimelineStep({
  step,
  index,
}: {
  step: (typeof TIMELINE_STEPS)[number];
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.48, delay: index * 0.16 }}
      className="relative mb-8 rounded-xl border border-border bg-background/35 p-4 pl-14"
    >
      <div className="absolute left-4 top-5 h-3 w-3 rounded-full ring-4 ring-background/85 ring-offset-1 ring-offset-accent/10" />
      <div className={`absolute left-4 top-5 h-3 w-3 rounded-full ${statusColors[step.status]}`} />

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-foreground">{step.time}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
            step.status === "new"
              ? "bg-success/16 text-success"
              : step.status === "warning"
                ? "bg-amber-400/16 text-amber-400"
                : step.status === "lost"
                  ? "bg-urgency/16 text-urgency"
                  : "bg-muted/16 text-muted"
          }`}
        >
          {statusLabels[step.status]}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
    </motion.div>
  );
}

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_40%)]"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="El problema"
          title="Pagas por leads, pero los pierdes en el tiempo de respuesta."
          subtitle="Cuando el cliente llena formulario fuera de horario, la velocidad define quién firma primero."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal>
            <div className="legal-panel rounded-2xl p-6 sm:p-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Línea de fuga del lead</p>
              <div className="relative">
                <div className="absolute left-[1.15rem] top-3 h-[90%] w-px bg-gradient-to-b from-success via-amber-400 to-urgency" />
                {TIMELINE_STEPS.map((step, i) => (
                  <TimelineStep key={i} step={step} index={i} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-5" staggerDelay={0.1}>
            {PAIN_POINTS.map((point, index) => {
              const Icon = icons[index] ?? Clock8;
              return (
                <StaggerItem key={point.number}>
                  <motion.div whileHover={{ y: -4 }} className="card-premium rounded-2xl p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-urgency/30 bg-urgency/14 text-sm font-semibold text-urgency">
                        {point.number}
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-light/50 text-accent-light">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
