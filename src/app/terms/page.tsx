import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SmartData Legal terms of service. Rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="prose-invert mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Last updated: February 2026</p>

          <div className="mt-10 space-y-8 text-foreground/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section>
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using the SmartData Legal website and services, you agree
                to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            <section>
              <h2>Description of Service</h2>
              <p>
                SmartData Legal provides an AI-powered legal intake automation system
                designed for law firms. Our service captures, qualifies, and organizes
                leads automatically in English and Spanish. SmartData Legal is a product
                of SmartData PR.
              </p>
            </section>

            <section>
              <h2>User Obligations</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use the service to transmit harmful or malicious content</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                All content, features, and functionality of the SmartData Legal website
                and platform, including but not limited to text, graphics, logos, and
                software, are the property of SmartData PR and are protected by
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2>Data and Privacy</h2>
              <p>
                Your use of our services is also governed by our{" "}
                <a href="/privacy" className="text-accent-light hover:underline">
                  Privacy Policy
                </a>
                . By using SmartData Legal, you consent to the collection and use of
                information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                SmartData Legal and SmartData PR shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages resulting from
                your use of or inability to use the service. Our total liability shall
                not exceed the amount paid by you for the service during the twelve months
                preceding the claim.
              </p>
            </section>

            <section>
              <h2>Service Availability</h2>
              <p>
                We strive to maintain high availability of our services but do not
                guarantee uninterrupted access. We reserve the right to modify, suspend,
                or discontinue any part of the service with reasonable notice.
              </p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance
                with the laws of the Commonwealth of Puerto Rico. Any disputes arising
                under these terms shall be subject to the exclusive jurisdiction of the
                courts of Puerto Rico.
              </p>
            </section>

            <section>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes
                will be effective upon posting to this page. Continued use of the service
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at:{" "}
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
