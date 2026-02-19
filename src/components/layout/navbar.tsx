"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { getDemoLink } from "@/lib/demo-link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const height = useTransform(scrollY, [0, 100], [80, 64]);
  const demoLink = getDemoLink();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{
          height: prefersReducedMotion ? 72 : height,
        }}
        className="fixed top-0 right-0 left-0 z-50 flex items-center"
      >
        {/* Background layer */}
        <motion.div
          style={{ opacity: prefersReducedMotion ? 1 : bgOpacity }}
          className="absolute inset-0 border-b border-border bg-background/80 backdrop-blur-xl"
        />

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 text-xl font-bold">
            <span className="text-foreground">SmartData</span>
            <span className="text-accent-light">Legal</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
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
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 rounded-lg p-2 text-foreground md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-foreground transition-colors hover:text-accent-light"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={demoLink}
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-accent-light"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
