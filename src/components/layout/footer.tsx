import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-0.5 text-lg font-bold">
              <span className="text-foreground">SmartData</span>
              <span className="text-accent-light">Legal</span>
            </div>
            <p className="mt-2 text-sm text-muted">
              AI-powered legal intake for Puerto Rico law firms.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:elfren@smartdatapr.com"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://smartdatapr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  SmartData PR
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Legal
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} SmartData Legal &mdash; Puerto Rico. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
