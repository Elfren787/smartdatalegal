import {
  LayoutDashboard,
  Brain,
  Upload,
  GitBranch,
  Bell,
  Plug,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Built for PR", href: "#bilingual" },
] as const;

export const STATS = [
  { value: "< 60s", label: "Lead Response Time" },
  { value: "EN / ES", label: "Fully Bilingual Intake" },
  { value: "24/7", label: "Always-On Capture" },
] as const;

export const TIMELINE_STEPS = [
  {
    time: "9:02 PM",
    description: "New lead submits form. Personal injury, car accident.",
    status: "new" as const,
  },
  {
    time: "9:15 PM",
    description: "Lead gets impatient. Googles another firm.",
    status: "warning" as const,
  },
  {
    time: "9:47 PM",
    description: "Lead fills out competitor's form. Gets a callback.",
    status: "lost" as const,
  },
  {
    time: "Next morning",
    description: "Your paralegal sees the form. Too late.",
    status: "dead" as const,
  },
] as const;

export const PAIN_POINTS = [
  {
    number: 1,
    title: "Slow response = lost revenue",
    description:
      "Responding within 5 minutes makes you 10x more likely to convert. Most firms take hours or days.",
  },
  {
    number: 2,
    title: "Paralegals buried in repetitive work",
    description:
      "Collecting names, dates, case details over and over. High-value staff doing low-value data entry.",
  },
  {
    number: 3,
    title: "No system, no visibility",
    description:
      "Leads tracked in Excel, WhatsApp, sticky notes. No way to know who is hot, who is cold, or who fell through the cracks.",
  },
] as const;

export const SOLUTION_STEPS = [
  {
    step: "01",
    title: "Instant Bilingual Intake",
    tag: "Under 60 seconds",
    description:
      "A potential client fills out your smart form in English or Spanish. The system collects case type, incident details, injuries, and documents in a guided flow.",
  },
  {
    step: "02",
    title: "AI Scores and Prioritizes",
    tag: "AI-Powered",
    description:
      "AI analyzes the intake, generates a case summary, scores the lead as Hot, Warm, or Cold, and flags risks like statute of limitations or unclear liability.",
  },
  {
    step: "03",
    title: "Your Team Takes Over",
    tag: "Action-Ready",
    description:
      "Hot leads trigger instant alerts. Your dashboard shows every lead prioritized, assigned, and tracked with SLAs. No lead falls through the cracks.",
  },
] as const;

export const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Live Dashboard and KPIs",
    description:
      "See every lead, its status, score, owner, and SLA in real time. Filter by case type, source, or date. Export to CSV anytime.",
  },
  {
    icon: Brain,
    title: "AI Lead Scoring",
    description:
      "Every lead is automatically scored Hot, Warm, or Cold based on case details, urgency, and potential value. Hot leads get priority.",
  },
  {
    icon: Upload,
    title: "Document Uploads",
    description:
      "Clients can upload photos, police reports, medical records directly during intake. Everything attached to the lead record.",
  },
  {
    icon: GitBranch,
    title: "Complete Status Workflow",
    description:
      "Track every lead from New to Contacted to Consultation to Signed to Declined. Internal notes, activity timeline, and owner assignment built in.",
  },
  {
    icon: Bell,
    title: "SMS and Email Alerts",
    description:
      "Instant notifications when hot leads come in. Automated confirmations to clients. Built on Twilio and Resend for reliability.",
  },
  {
    icon: Plug,
    title: "Designed to Complement Your Tools",
    description:
      "SmartData Legal is your conversion layer -- designed to work alongside your existing legal CRM and case management workflow.",
  },
] as const;

export const BILINGUAL_CONTENT = {
  en: "Every intake form, every notification, every client-facing touchpoint works seamlessly in English and Spanish. Your clients choose their language. Your team sees everything translated and ready to act on.",
  es: "Cada formulario de intake, cada notificacion, cada punto de contacto con el cliente funciona en ingles y espanol. Sus clientes eligen su idioma. Su equipo ve todo traducido y listo para actuar.",
} as const;

export const TESTIMONIAL_PLACEHOLDERS = [
  {
    firm: "Rivera & Associates",
    location: "San Juan, PR",
    quote:
      "Testimonial placeholder -- real client feedback coming soon.",
  },
  {
    firm: "Torres Legal Group",
    location: "Bayamon, PR",
    quote:
      "Testimonial placeholder -- real client feedback coming soon.",
  },
  {
    firm: "Mendez Law Office",
    location: "Ponce, PR",
    quote:
      "Testimonial placeholder -- real client feedback coming soon.",
  },
] as const;
