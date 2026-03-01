const FALLBACK_MAILTO =
  "mailto:elfren@smartdatapr.com?subject=Solicitud%20de%20demo%20SmartData%20Legal";

const WHATSAPP_NUMBER = "17873871094";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa agendar un demo de SmartData Legal para mi bufete."
);

export function getDemoLink(): string {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  if (calendlyUrl && calendlyUrl.trim().length > 0) {
    return calendlyUrl.trim();
  }
  return FALLBACK_MAILTO;
}

export function getWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
}

export function isCalendlyConfigured(): boolean {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  return Boolean(calendlyUrl && calendlyUrl.trim().length > 0);
}
