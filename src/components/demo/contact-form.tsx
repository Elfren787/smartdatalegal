"use client";

import { useState, type FormEvent } from "react";
import { isCalendlyConfigured } from "@/lib/demo-link";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  firm: string;
  email: string;
  phone: string;
  language: "en" | "es";
}

export function ContactForm() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const hasCalendly = isCalendlyConfigured();

  if (hasCalendly && calendlyUrl) {
    return (
      <div className="mx-auto max-w-2xl">
        <iframe
          src={calendlyUrl}
          className="h-[700px] w-full rounded-xl border-0"
          title="Schedule a demo"
          loading="lazy"
        />
      </div>
    );
  }

  return <FallbackForm />;
}

function FallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    firm: "",
    email: "",
    phone: "",
    language: "en",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.firm.trim()) newErrors.firm = "Firm name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent("SmartData Legal Demo Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nFirm: ${formData.firm}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Language: ${formData.language === "en" ? "English" : "Spanish"}`
    );

    window.location.href = `mailto:elfren@smartdatapr.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-xl border border-border bg-surface p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-success" />
        <h3 className="mt-4 text-xl font-semibold">Request Sent</h3>
        <p className="mt-2 text-sm text-muted">
          Your email client should have opened with the demo request. If it
          didn&apos;t, please email us directly at{" "}
          <a
            href="mailto:elfren@smartdatapr.com"
            className="text-accent-light hover:underline"
          >
            elfren@smartdatapr.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-5 rounded-xl border border-border bg-surface p-8"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted focus:border-accent-light focus:ring-2 focus:ring-accent-light/20 focus:outline-none"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-urgency">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="firm" className="block text-sm font-medium text-foreground">
          Firm Name
        </label>
        <input
          id="firm"
          type="text"
          value={formData.firm}
          onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted focus:border-accent-light focus:ring-2 focus:ring-accent-light/20 focus:outline-none"
          placeholder="Your law firm"
        />
        {errors.firm && <p className="mt-1 text-sm text-urgency">{errors.firm}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted focus:border-accent-light focus:ring-2 focus:ring-accent-light/20 focus:outline-none"
          placeholder="you@firm.com"
        />
        {errors.email && <p className="mt-1 text-sm text-urgency">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted focus:border-accent-light focus:ring-2 focus:ring-accent-light/20 focus:outline-none"
          placeholder="(787) 555-0123"
        />
        {errors.phone && <p className="mt-1 text-sm text-urgency">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="language" className="block text-sm font-medium text-foreground">
          Preferred Language
        </label>
        <select
          id="language"
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value as "en" | "es" })
          }
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-accent-light focus:ring-2 focus:ring-accent-light/20 focus:outline-none"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-accent-light focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-background focus:outline-none"
      >
        Request a Demo
      </button>
    </form>
  );
}
