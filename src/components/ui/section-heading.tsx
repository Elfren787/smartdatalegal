import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <ScrollReveal className={`${alignment} ${className}`}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
    </ScrollReveal>
  );
}
