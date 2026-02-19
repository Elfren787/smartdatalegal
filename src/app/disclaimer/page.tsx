import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "SmartData Legal disclaimer. Important information about our AI-powered legal intake service.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="prose-invert mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight">Disclaimer</h1>
          <p className="mt-2 text-sm text-muted">Last updated: February 2026</p>

          <div className="mt-10 space-y-8 text-foreground/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-relaxed">
            <section>
              <h2>Not Legal Advice</h2>
              <p>
                SmartData Legal is a technology platform that automates the client intake
                process for law firms. Nothing on this website or within our platform
                constitutes legal advice. SmartData Legal does not provide legal services,
                legal representation, or attorney-client relationships.
              </p>
              <p>
                The information presented on this website is for informational and marketing
                purposes only. If you need legal advice, please consult a licensed attorney
                in your jurisdiction.
              </p>
            </section>

            <section>
              <h2>AI-Assisted, Not AI-Replaced</h2>
              <p>
                SmartData Legal uses artificial intelligence to assist with lead scoring,
                case categorization, and intake summarization. AI-generated outputs are
                designed to support your legal team&apos;s decision-making, not replace it.
              </p>
              <p>
                All AI-generated scores, summaries, and recommendations should be reviewed
                by qualified legal professionals before any action is taken. SmartData Legal
                does not guarantee the accuracy of AI-generated content and is not responsible
                for decisions made based on AI outputs.
              </p>
            </section>

            <section>
              <h2>No Guarantees of Results</h2>
              <p>
                While SmartData Legal is designed to improve lead response times and intake
                efficiency, we do not guarantee specific results, conversion rates, or
                revenue outcomes. Results may vary based on factors including but not limited
                to your firm&apos;s practice areas, market conditions, advertising spend, and
                staff responsiveness.
              </p>
              <p>
                Statistics and metrics referenced on this website represent product capabilities
                and design targets, not guaranteed outcomes for any individual firm.
              </p>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>
                SmartData Legal integrates with third-party services for functionality
                including SMS notifications, email delivery, and data storage. We are not
                responsible for the availability, accuracy, or policies of these third-party
                services. Each third-party service is governed by its own terms of service
                and privacy policy.
              </p>
            </section>

            <section>
              <h2>Data Accuracy</h2>
              <p>
                While we strive to ensure all information on this website is accurate and
                up to date, we make no warranties or representations about the completeness,
                reliability, or accuracy of any information contained herein. Any reliance
                you place on such information is strictly at your own risk.
              </p>
            </section>

            <section>
              <h2>Jurisdiction</h2>
              <p>
                SmartData Legal is a product of SmartData PR, based in Puerto Rico. This
                disclaimer is governed by the laws of the Commonwealth of Puerto Rico.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                If you have questions about this Disclaimer, please contact us at:{" "}
                <a href="mailto:elfren@smartdatapr.com" className="text-accent-light hover:underline">
                  elfren@smartdatapr.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
