import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/demo/contact-form";

export const metadata: Metadata = {
  title: "Agendar demo",
  description:
    "Agenda una demostracion de 15 minutos de SmartData Legal para ver como tu firma puede responder mas rapido y convertir mas leads.",
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(96,165,250,0.14),transparent_35%)]"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-border bg-surface/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
              Solicitud de demo
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Agenda tu demo</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              15 minutos. Tus tipos de caso. Tu operacion legal.
            </p>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
