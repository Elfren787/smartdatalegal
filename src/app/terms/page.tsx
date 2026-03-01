import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Términos del servicio",
  description: "Términos del servicio de SmartData Legal.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-semibold tracking-tight">Términos del servicio</h1>
          <p className="mt-2 text-sm text-muted">Última actualización: febrero 2026</p>

          <div className="mt-10 space-y-8 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section>
              <h2>1. Aceptación</h2>
              <p>
                Al usar este sitio y los servicios de SmartData Legal, aceptas estos términos. Si no estás de acuerdo,
                no debes utilizar la plataforma.
              </p>
            </section>

            <section>
              <h2>2. Descripción del servicio</h2>
              <p>
                SmartData Legal ofrece software de intake legal asistido por IA para captar, organizar y priorizar leads
                en bufetes de abogados.
              </p>
            </section>

            <section>
              <h2>3. Obligaciones del usuario</h2>
              <ul>
                <li>Proveer información veraz y actualizada.</li>
                <li>Usar la plataforma conforme a ley.</li>
                <li>No intentar acceso no autorizado a sistemas o datos.</li>
                <li>Proteger credenciales y accesos internos.</li>
              </ul>
            </section>

            <section>
              <h2>4. Propiedad intelectual</h2>
              <p>
                El contenido, software, marca y materiales de SmartData Legal pertenecen a SmartData PR y están protegidos
                por leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2>5. Limitación de responsabilidad</h2>
              <p>
                SmartData Legal no garantiza resultados específicos de conversión o ingresos. El uso del sistema y decisiones
                del equipo legal son responsabilidad del cliente.
              </p>
            </section>

            <section>
              <h2>6. Disponibilidad</h2>
              <p>
                Procuramos alta disponibilidad, pero puede haber mantenimiento o interrupciones temporales por causas técnicas.
              </p>
            </section>

            <section>
              <h2>7. Jurisdicción</h2>
              <p>
                Estos términos se rigen por las leyes de Puerto Rico. Toda controversia se atenderá en tribunales competentes
                de Puerto Rico.
              </p>
            </section>

            <section>
              <h2>8. Contacto</h2>
              <p>
                Para dudas sobre estos términos, escribe a {" "}
                <a href="mailto:elfren@smartdatapr.com" className="text-accent-light hover:underline">
                  elfren@smartdatapr.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
