import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de SmartData Legal.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-semibold tracking-tight">Política de privacidad</h1>
          <p className="mt-2 text-sm text-muted">Última actualización: febrero 2026</p>

          <div className="mt-10 space-y-8 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section>
              <h2>1. Introducción</h2>
              <p>
                SmartData Legal, producto de SmartData PR, respeta tu privacidad. Esta política explica qué datos recopilamos,
                cómo los usamos y cómo los protegemos cuando visitas este sitio o solicitas una demostración.
              </p>
            </section>

            <section>
              <h2>2. Datos que recopilamos</h2>
              <ul>
                <li>Datos de contacto: nombre, bufete, correo, teléfono e idioma preferido.</li>
                <li>Datos técnicos: navegador, dispositivo, dirección IP y páginas visitadas.</li>
                <li>Datos de uso: interacciones generales para mejorar contenido y conversión.</li>
              </ul>
            </section>

            <section>
              <h2>3. Uso de la información</h2>
              <ul>
                <li>Responder solicitudes de demo y consultas comerciales.</li>
                <li>Mejorar la experiencia del sitio y su rendimiento.</li>
                <li>Enviar comunicaciones relacionadas al producto y su implementación.</li>
                <li>Cumplir con obligaciones legales aplicables.</li>
              </ul>
            </section>

            <section>
              <h2>4. Seguridad y almacenamiento</h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger la información. La infraestructura puede
                incluir servicios de terceros como hosting y base de datos bajo buenas prácticas de seguridad.
              </p>
            </section>

            <section>
              <h2>5. Servicios de terceros</h2>
              <p>
                Podemos usar proveedores externos para correo, mensajería, almacenamiento y analítica. Cada proveedor tiene
                sus propias políticas y términos.
              </p>
            </section>

            <section>
              <h2>6. Tus derechos</h2>
              <p>
                Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a {" "}
                <a href="mailto:elfren@smartdatapr.com" className="text-accent-light hover:underline">
                  elfren@smartdatapr.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2>7. Jurisdicción</h2>
              <p>Esta política se interpreta conforme a las leyes del Estado Libre Asociado de Puerto Rico.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
