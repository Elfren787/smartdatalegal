"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Languages } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BILINGUAL_CONTENT } from "@/lib/constants";

type Language = "en" | "es";

export function Bilingual() {
  const [lang, setLang] = useState<Language>("es");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="bilingual" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Bilingue"
          title="Cobertura total en ingles y espanol desde el primer contacto."
        />

        <ScrollReveal className="mx-auto mt-12 max-w-5xl">
          <div className="legal-panel rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90">
                <Languages className="h-4 w-4 text-accent-light" />
                Operacion bilingue
              </div>

              <div className="inline-flex rounded-xl border border-border bg-background/45 p-1.5">
                {([
                  { key: "es", label: "Vista ES" },
                  { key: "en", label: "Vista EN" },
                ] as const).map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setLang(option.key)}
                    className={`relative rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
                      lang === option.key ? "text-white" : "text-muted hover:text-foreground"
                    }`}
                    aria-pressed={lang === option.key}
                  >
                    {lang === option.key && (
                      <motion.div
                        layoutId="bilingual-toggle"
                        className="absolute inset-0 rounded-lg bg-accent"
                        transition={{ type: "spring", duration: 0.38, bounce: 0.14 }}
                      />
                    )}
                    <span className="relative z-10">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-xl border border-border bg-background/35 p-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.26 }}
                    className="text-base leading-relaxed text-foreground/90"
                  >
                    {BILINGUAL_CONTENT[lang]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="rounded-xl border border-border bg-background/35 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Beneficio para el equipo legal</p>
                <div className="space-y-2 text-sm">
                  <div className="rounded-lg border border-border px-3 py-2 text-foreground/85">Paralegales reciben intake estructurado desde el inicio</div>
                  <div className="rounded-lg border border-border px-3 py-2 text-foreground/85">Abogados ven contexto y prioridad antes de la consulta</div>
                  <div className="rounded-lg border border-border px-3 py-2 text-foreground/85">Socios monitorean respuesta y conversion en un solo panel</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
