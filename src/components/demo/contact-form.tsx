"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Mail, PhoneCall } from "lucide-react";
import { isCalendlyConfigured } from "@/lib/demo-link";

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
      <div className="mx-auto max-w-4xl">
        <div className="legal-panel rounded-2xl p-4 sm:p-6">
          <iframe
            src={calendlyUrl}
            className="h-[730px] w-full rounded-xl border-0 bg-white"
            title="Agenda una demo de SmartData Legal"
            loading="lazy"
          />
        </div>
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
    language: "es",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.firm.trim()) newErrors.firm = "El nombre del bufete es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email valido";
    }
    if (!formData.phone.trim()) newErrors.phone = "El telefono es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent("Solicitud de demo SmartData Legal");
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nBufete: ${formData.firm}\nEmail: ${formData.email}\nTelefono: ${formData.phone}\nIdioma preferido: ${formData.language === "en" ? "Ingles" : "Espanol"}`
    );

    window.location.href = `mailto:elfren@smartdatapr.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl">
        <div className="legal-panel rounded-2xl p-8 text-center">
          <CheckCircle2 className="mx-auto h-11 w-11 text-success" />
          <h3 className="mt-4 text-2xl font-semibold">Solicitud preparada</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Tu cliente de email debe abrirse con los datos del demo. Si no se abre, escribenos a {" "}
            <a href="mailto:elfren@smartdatapr.com" className="text-accent-light hover:underline">
              elfren@smartdatapr.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5 legal-panel rounded-2xl p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Nombre completo"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          placeholder="Tu nombre"
          error={errors.name}
        />
        <Field
          id="firm"
          label="Nombre del bufete"
          value={formData.firm}
          onChange={(value) => setFormData({ ...formData, firm: value })}
          placeholder="Tu firma legal"
          error={errors.firm}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="email"
          label="Correo electronico"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          placeholder="tu@bufete.com"
          error={errors.email}
          type="email"
          icon={<Mail className="h-4 w-4" />}
        />
        <Field
          id="phone"
          label="Telefono"
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
          placeholder="(787) 555-0123"
          error={errors.phone}
          type="tel"
          icon={<PhoneCall className="h-4 w-4" />}
        />
      </div>

      <div>
        <label htmlFor="language" className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Idioma preferido
        </label>
        <select
          id="language"
          value={formData.language}
          onChange={(e) => setFormData({ ...formData, language: e.target.value as "en" | "es" })}
          className="mt-2 w-full rounded-xl border border-border bg-background/45 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-light"
        >
          <option value="es">Espanol</option>
          <option value="en">Ingles</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl border border-accent-light/45 bg-gradient-to-r from-accent to-accent-light px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-accent/30 transition hover:brightness-110"
      >
        Solicitar demo
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  icon,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
  icon?: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      <div className="relative mt-2">
        {icon ? <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">{icon}</span> : null}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border border-border bg-background/45 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-light ${
            icon ? "pl-10" : ""
          }`}
          placeholder={placeholder}
        />
      </div>
      {error ? <p className="mt-1.5 text-xs text-urgency">{error}</p> : null}
    </div>
  );
}
