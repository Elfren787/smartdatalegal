"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Menu, Scale, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { getDemoLink } from "@/lib/demo-link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const demoLink = getDemoLink();

  const bgOpacity = useTransform(scrollY, [0, 140], [0.45, 1]);
  const navScale = useTransform(scrollY, [0, 140], [1, 0.975]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={prefersReducedMotion ? {} : { scale: navScale }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <motion.div
          style={prefersReducedMotion ? {} : { opacity: bgOpacity }}
          className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-border bg-surface/70 px-4 backdrop-blur-xl sm:px-6"
        >
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent-light">
              <Scale className="h-4 w-4" />
            </span>
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              SmartData <span className="text-accent-light">Legal</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={demoLink}
              className="rounded-lg border border-accent/40 bg-accent/15 px-4 py-2 text-sm font-semibold text-accent-light transition-all hover:border-accent-light hover:bg-accent/20"
            >
              Agendar demo
            </a>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg border border-border p-2 text-foreground md:hidden"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>

        <motion.div
          className="mx-auto mt-2 h-0.5 w-full max-w-7xl origin-left rounded-full bg-accent/60"
          style={prefersReducedMotion ? {} : { scaleX: scrollYProgress }}
        />
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 px-6 pt-28 backdrop-blur-xl md:hidden"
          >
            <div className="legal-panel rounded-2xl p-6">
              <div className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl border border-border px-4 py-3 text-base font-medium text-foreground/90"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href={demoLink}
                onClick={() => setIsOpen(false)}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white"
              >
                Agendar demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
