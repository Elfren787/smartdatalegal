import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description: "Politica de privacidad de SmartData Legal.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-semibold tracking-tight">Politica de privacidad</h1>
          <p className="mt-2 text-sm text-muted">Ultima actualizacion: febrero 2026</p>

          <div className="mt-10 space-y-8 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section>
              <h2>1. Introduccion</h2>
              <p>
                SmartData Legal, producto de SmartData PR, respeta tu privacidad. Esta politica explica que datos recopilamos,
                como los usamos y como los protegemos cuando visitas este sitio o solicitas una demostracion.
              </p>
            </section>

            <section>
              <h2>2. Datos que recopilamos</h2>
              <ul>
                <li>Datos de contacto: nombre, bufete, correo, telefono e idioma preferido.</li>
                <li>Datos tecnicos: navegador, dispositivo, direccion IP y paginas visitadas.</li>
                <li>Datos de uso: interacciones generales para mejorar contenido y conversion.</li>
              </ul>
            </section>

            <section>
              <h2>3. Uso de la informacion</h2>
              <ul>
                <li>Responder solicitudes de demo y consultas comerciales.</li>
                <li>Mejorar la experiencia del sitio y su rendimiento.</li>
                <li>Enviar comunicaciones relacionadas al producto y su implementacion.</li>
                <li>Cumplir con obligaciones legales aplicables.</li>
              </ul>
            </section>

            <section>
              <h2>4. Seguridad y almacenamiento</h2>
              <p>
                Aplicamos medidas tecnicas y organizativas razonables para proteger la informacion. La infraestructura puede
                incluir servicios de terceros como hosting y base de datos bajo buenas practicas de seguridad.
              </p>
            </section>

            <section>
              <h2>5. Servicios de terceros</h2>
              <p>
                Podemos usar proveedores externos para correo, mensajeria, almacenamiento y analitica. Cada proveedor tiene
                sus propias politicas y terminos.
              </p>
            </section>

            <section>
              <h2>6. Tus derechos</h2>
              <p>
                Puedes solicitar acceso, correccion o eliminacion de tus datos escribiendo a {" "}
                <a href="mailto:elfren@smartdatapr.com" className="text-accent-light hover:underline">
                  elfren@smartdatapr.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2>7. Jurisdiccion</h2>
              <p>Esta politica se interpreta conforme a las leyes del Estado Libre Asociado de Puerto Rico.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
