import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de SmartData Legal sobre uso de la plataforma y salidas de IA.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-semibold tracking-tight">Aviso legal</h1>
          <p className="mt-2 text-sm text-muted">Última actualización: febrero 2026</p>

          <div className="mt-10 space-y-8 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed">
            <section>
              <h2>1. No constituye asesoría legal</h2>
              <p>
                SmartData Legal es una plataforma tecnológica para intake. No provee asesoría legal, representación ni crea
                relación abogado-cliente por sí sola.
              </p>
            </section>

            <section>
              <h2>2. IA como apoyo, no reemplazo</h2>
              <p>
                Los scores, resúmenes y sugerencias generadas por IA son apoyo operativo. Toda decisión final debe ser revisada
                por paralegales y abogados del bufete.
              </p>
            </section>

            <section>
              <h2>3. Sin garantía de resultados</h2>
              <p>
                El sistema mejora orden y velocidad de intake, pero no garantiza conversión o ingresos específicos. Los resultados
                dependen del mercado, operación del bufete y tiempos de seguimiento.
              </p>
            </section>

            <section>
              <h2>4. Servicios de terceros</h2>
              <p>
                Algunas funciones dependen de servicios externos (mensajería, email, infraestructura). Su disponibilidad puede
                variar según cada proveedor.
              </p>
            </section>

            <section>
              <h2>5. Contacto</h2>
              <p>
                Para consultas sobre este aviso legal: {" "}
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
