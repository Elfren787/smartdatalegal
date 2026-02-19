"use client";

import { motion } from "framer-motion";
import { Clock3, Globe2, TimerReset } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { STATS } from "@/lib/constants";

const icons = [Clock3, Globe2, TimerReset] as const;

export function StatsBar() {
  return (
    <div className="relative z-10 -mt-10 px-6 sm:-mt-14">
      <ScrollReveal>
        <div className="legal-panel mx-auto max-w-5xl rounded-2xl p-5 sm:p-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat, i) => {
              const Icon = icons[i] ?? Clock3;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-border bg-background/35 p-4 text-center"
                >
                  <div className="mx-auto mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/14">
                    <Icon className="h-4 w-4 text-accent-light" />
                  </div>
                  <AnimatedCounter
                    value={stat.value}
                    className="block text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                  />
                  <p className="mt-1 text-sm font-medium text-foreground/90">{stat.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">{stat.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
