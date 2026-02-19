"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CtaButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "animate-glow border border-accent-light/50 bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/35",
    secondary:
      "border border-border bg-surface/60 text-foreground hover:border-accent/50 hover:bg-surface-light/60",
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.99 },
      };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  const isExternal = external || href.startsWith("mailto:") || href.startsWith("http");

  if (isExternal) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.span {...motionProps} className="inline-flex">
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    </motion.span>
  );
}
