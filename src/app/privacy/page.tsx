import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SmartData Legal privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <article className="prose-invert mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: February 2026</p>

          <div className="mt-10 space-y-8 text-foreground/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            <section>
              <h2>Introduction</h2>
              <p>
                SmartData Legal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a product of SmartData PR,
                operates the website smartdatalegal.com. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Contact information</strong> you provide through our demo request
                  form, including your name, firm name, email address, phone number, and
                  language preference.
                </li>
                <li>
                  <strong>Usage data</strong> automatically collected when you visit our
                  website, such as your IP address, browser type, pages visited, and time
                  spent on pages.
                </li>
                <li>
                  <strong>Analytics data</strong> collected through standard web analytics
                  tools to understand website traffic and usage patterns.
                </li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your demo requests and inquiries</li>
                <li>Communicate with you about our products and services</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website usage to enhance our marketing efforts</li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2>Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to
                protect your personal information. Data submitted through our intake system
                is stored securely using industry-standard encryption and access controls.
                Our infrastructure providers include Vercel (hosting) and Supabase (database),
                both of which maintain SOC 2 compliance.
              </p>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>
                We may use third-party services for analytics, communication, and hosting
                purposes. These services have their own privacy policies governing their use
                of your information. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your
                personal information. To exercise these rights, please contact us at{" "}
                <a href="mailto:elfren@smartdatapr.com" className="text-accent-light hover:underline">
                  elfren@smartdatapr.com
                </a>.
              </p>
            </section>

            <section>
              <h2>Applicable Law</h2>
              <p>
                This Privacy Policy is governed by the laws of the Commonwealth of Puerto
                Rico and applicable federal laws of the United States.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new Privacy Policy on this page and updating the
                &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{" "}
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
