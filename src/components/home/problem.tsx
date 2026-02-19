"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TIMELINE_STEPS, PAIN_POINTS } from "@/lib/constants";

const statusColors = {
  new: "bg-success",
  warning: "bg-amber-400",
  lost: "bg-urgency",
  dead: "bg-muted/40",
} as const;

const statusLabels = {
  new: "Active",
  warning: "At risk",
  lost: "Lost",
  dead: "Gone",
} as const;

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
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative mb-8 flex items-start gap-4 pl-14 sm:pl-20"
    >
      {/* Status dot */}
      <div
        className={`absolute left-4 top-1.5 h-4 w-4 rounded-full ${statusColors[step.status]} ring-4 ring-background sm:left-6`}
      />

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-foreground">{step.time}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              step.status === "new"
                ? "bg-success/10 text-success"
                : step.status === "warning"
                  ? "bg-amber-400/10 text-amber-400"
                  : step.status === "lost"
                    ? "bg-urgency/10 text-urgency"
                    : "bg-muted/10 text-muted"
            }`}
          >
            {statusLabels[step.status]}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="You're paying for leads. Then letting them walk away."
          subtitle="Law firms spend $3,000-$10,000/month on ads. But when a potential client fills out a form at 9 PM and no one responds until the next morning -- that lead is gone."
        />

        {/* Lead Leak Timeline */}
        <div className="mx-auto mt-16 max-w-2xl">
          <ScrollReveal>
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted">
              The Lead Leak Timeline
            </h3>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 h-full w-px bg-border sm:left-8" />

            {TIMELINE_STEPS.map((step, i) => (
              <TimelineStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Pain Points */}
        <StaggerContainer className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <StaggerItem key={point.number}>
              <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover hover:-translate-y-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-urgency/10 text-lg font-bold text-urgency">
                  {point.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
