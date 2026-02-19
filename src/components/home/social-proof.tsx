"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/constants";
import { Quote } from "lucide-react";

export function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Built for the firms that refuse to lose another lead" />

        {/* Testimonials */}
        <StaggerContainer
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {TESTIMONIAL_PLACEHOLDERS.map((item, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <Quote className="h-6 w-6 text-accent/30" />
                <p className="mt-4 text-sm italic leading-relaxed text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {item.firm}
                  </p>
                  <p className="text-xs text-muted">{item.location}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Built with */}
        <ScrollReveal className="mt-16">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted">
            Built with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted/60">
            <span className="rounded-lg border border-border px-4 py-2">
              Next.js
            </span>
            <span className="rounded-lg border border-border px-4 py-2">
              Anthropic Claude
            </span>
            <span className="rounded-lg border border-border px-4 py-2">
              Supabase
            </span>
            <span className="rounded-lg border border-border px-4 py-2">
              Twilio
            </span>
            <span className="rounded-lg border border-border px-4 py-2">
              Resend
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
