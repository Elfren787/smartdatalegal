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
    "inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light animate-glow shadow-lg shadow-accent/20",
    secondary:
      "border border-border text-foreground hover:border-accent-light hover:text-accent-light bg-transparent",
  };

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
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
    <Link href={href} passHref legacyBehavior>
      <motion.a className={combinedClassName} {...motionProps}>
        {children}
      </motion.a>
    </Link>
  );
}
