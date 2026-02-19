"use client";

export function GradientBg() {
  return (
    <div
      aria-hidden="true"
      className="animate-gradient-mesh pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(96, 165, 250, 0.1) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 50% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 90% 40% at 60% 10%, rgba(30, 64, 175, 0.12) 0%, transparent 60%),
          linear-gradient(180deg, #0a0f1e 0%, #0f172a 50%, #0a0f1e 100%)
        `,
      }}
    />
  );
}
