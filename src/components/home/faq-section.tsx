"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, Lock, Eye, Server } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { FAQ_ITEMS } from "@/lib/constants";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent-light"
      >
        <span className="text-base font-medium text-foreground">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-muted" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Security panel */}
          <ScrollReveal>
            <div className="legal-panel rounded-2xl p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
                Seguridad y privacidad
              </p>
              <h3 className="text-xl font-semibold text-foreground">
                Tus datos y los de tus clientes están protegidos.
              </h3>
              <p className="mt-3 mb-6 text-sm leading-relaxed text-muted">
                Entendemos que la confidencialidad abogado-cliente es prioridad absoluta.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Lock, text: "Datos encriptados en tránsito y en reposo" },
                  { icon: Eye, text: "Solo tu equipo autorizado tiene acceso" },
                  { icon: ShieldCheck, text: "La IA no almacena ni entrena con tu data" },
                  { icon: Server, text: "Hosted en infraestructura cloud segura y escalable" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <p className="text-sm text-foreground/85">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <div>
            <SectionHeading
              badge="Preguntas frecuentes"
              title="Lo que necesitas saber."
            />

            <StaggerContainer className="mt-8" staggerDelay={0.06}>
              {FAQ_ITEMS.map((item) => (
                <StaggerItem key={item.question}>
                  <FaqItem question={item.question} answer={item.answer} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
