"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <div className="relative z-10 -mt-16 px-6">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`text-center ${i < STATS.length - 1 ? "sm:border-r sm:border-border" : ""}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="block text-3xl font-bold text-accent-light sm:text-4xl"
                />
                <span className="mt-2 block text-sm text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
