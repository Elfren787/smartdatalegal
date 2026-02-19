import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/demo/contact-form";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Schedule a 15-minute demo of SmartData Legal. See how AI-powered legal intake works with your case types, in your language.",
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Book Your Demo
            </h1>
            <p className="mt-4 text-lg text-muted">
              15 minutes. Your case types. Your language.
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
