const FALLBACK_MAILTO =
  "mailto:elfren@smartdatapr.com?subject=SmartData%20Legal%20Demo%20Request";

export function getDemoLink(): string {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  if (calendlyUrl && calendlyUrl.trim().length > 0) {
    return calendlyUrl.trim();
  }
  return FALLBACK_MAILTO;
}

export function isCalendlyConfigured(): boolean {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  return Boolean(calendlyUrl && calendlyUrl.trim().length > 0);
}
