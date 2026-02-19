"use client";

export function GradientBg() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="animate-gradient-mesh absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 45% at 20% 20%, rgba(59, 130, 246, 0.24) 0%, transparent 65%),
            radial-gradient(ellipse 52% 62% at 90% 0%, rgba(37, 99, 235, 0.22) 0%, transparent 68%),
            radial-gradient(ellipse 58% 45% at 50% 80%, rgba(96, 165, 250, 0.16) 0%, transparent 62%),
            linear-gradient(180deg, #070b16 0%, #0a1325 45%, #070b16 100%)
          `,
        }}
      />
      <div className="animate-float-slow absolute -left-24 top-32 h-72 w-72 rounded-full bg-accent/18 blur-3xl" />
      <div className="animate-float-slow absolute -right-24 top-12 h-72 w-72 rounded-full bg-indigo-500/14 blur-3xl [animation-delay:1.2s]" />
      <div className="animate-float-slow absolute bottom-8 left-1/3 h-56 w-56 rounded-full bg-sky-400/14 blur-3xl [animation-delay:2.2s]" />
    </div>
  );
}
