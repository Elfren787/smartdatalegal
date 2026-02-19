"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  const animateValue = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // Extract numeric part for animation
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      el.textContent = value;
      return;
    }

    const targetNum = parseInt(numericMatch[1], 10);
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice((numericMatch.index ?? 0) + numericMatch[1].length);

    let startTime: number | null = null;
    const duration = 1500;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * targetNum);

      if (el) el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value]);

  useEffect(() => {
    if (hasAnimated.current) return;

    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = value;
      hasAnimated.current = true;
      return;
    }

    if (isInView) {
      hasAnimated.current = true;
      animateValue();
    }
  }, [isInView, value, prefersReducedMotion, animateValue]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
