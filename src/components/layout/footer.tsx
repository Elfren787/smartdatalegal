import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/45">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              SmartData <span className="text-accent-light">Legal</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Plataforma de intake legal con IA para equipos de paralegales y abogados que buscan más conversión y mejor control.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Empresa</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:elfren@smartdatapr.com"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="https://smartdatapr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  SmartData PR
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                  Términos del servicio
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6 text-center text-xs uppercase tracking-[0.14em] text-muted">
          © {new Date().getFullYear()} SmartData Legal · Puerto Rico
        </div>
      </div>
    </footer>
  );
}
