"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BILINGUAL_CONTENT } from "@/lib/constants";

type Language = "en" | "es";

export function Bilingual() {
  const [lang, setLang] = useState<Language>("en");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="bilingual" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Fully bilingual. From day one." />

        <ScrollReveal className="mx-auto mt-12 max-w-3xl">
          {/* Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-border bg-surface p-1">
              {(["en", "es"] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => setLang(option)}
                  className={`relative rounded-md px-6 py-2 text-sm font-semibold transition-colors ${
                    lang === option
                      ? "text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                  aria-pressed={lang === option}
                >
                  {lang === option && (
                    <motion.div
                      layoutId="bilingual-toggle"
                      className="absolute inset-0 rounded-md bg-accent"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative z-10">
                    {option === "en" ? "English" : "Espanol"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 min-h-[120px] rounded-xl border border-border bg-surface p-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center text-lg leading-relaxed text-foreground/80"
              >
                {BILINGUAL_CONTENT[lang]}
              </motion.p>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
