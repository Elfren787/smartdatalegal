import {
  LayoutDashboard,
  Brain,
  Upload,
  GitBranch,
  Bell,
  Plug,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Prueba visual", href: "#proof" },
  { label: "Resultados", href: "#value" },
] as const;

export const STATS = [
  { value: "60s", label: "Primera respuesta media", detail: "en leads prioritarios" },
  { value: "2", label: "Idiomas activos", detail: "inglés y español" },
  { value: "24/7", label: "Cobertura de intake", detail: "sin perder leads fuera de horario" },
] as const;

export const TIMELINE_STEPS = [
  {
    time: "9:02 PM",
    description: "Un lead nuevo de lesiones personales envía su caso desde móvil.",
    status: "new" as const,
  },
  {
    time: "9:15 PM",
    description: "El lead se impacienta y busca otro bufete en Google.",
    status: "warning" as const,
  },
  {
    time: "9:47 PM",
    description: "Otro despacho responde primero y agenda la consulta.",
    status: "lost" as const,
  },
  {
    time: "Al día siguiente",
    description: "Tu equipo abre el formulario, pero el caso ya se fue.",
    status: "dead" as const,
  },
] as const;

export const PAIN_POINTS = [
  {
    number: 1,
    title: "Respuesta lenta = dinero perdido",
    description:
      "Cada minuto cuenta. Si el lead espera demasiado, termina firmando con otro bufete.",
  },
  {
    number: 2,
    title: "Paralegales atrapados en tareas repetitivas",
    description:
      "El equipo legal pierde tiempo capturando datos una y otra vez en lugar de avanzar casos.",
  },
  {
    number: 3,
    title: "Sin visibilidad operativa",
    description:
      "Sin una cola central, se pierde control de seguimiento, prioridad y responsable por lead.",
  },
] as const;

export const SOLUTION_STEPS = [
  {
    step: "01",
    title: "Intake bilingüe inmediato",
    tag: "Menos de 60 segundos",
    description:
      "El cliente completa un flujo guiado en inglés o español con datos del caso y documentos.",
  },
  {
    step: "02",
    title: "Resumen legal y score con IA",
    tag: "Claude",
    description:
      "Cada envío se resume, se clasifica en prioridad alta/media/baja y queda listo para revisión del equipo.",
  },
  {
    step: "03",
    title: "Cola operativa para el despacho",
    tag: "Listo para accionar",
    description:
      "Paralegales y abogados reciben leads priorizados con responsable, estado y SLA.",
  },
] as const;

export const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Centro de control de leads",
    description:
      "Visualiza cada lead por estado, score, responsable y SLA en un solo panel.",
  },
  {
    icon: Brain,
    title: "Calificación de leads con IA",
    description:
      "La IA genera contexto útil para que paralegales y abogados prioricen rápido.",
  },
  {
    icon: Upload,
    title: "Captura de documentos",
    description:
      "Fotos, reportes y evidencia se adjuntan al lead desde el intake inicial.",
  },
  {
    icon: GitBranch,
    title: "Flujo real de estados",
    description:
      "Seguimiento claro en Nuevo, Contactado, Firmado y Declinado.",
  },
  {
    icon: Bell,
    title: "Alertas por tiempo",
    description:
      "Recordatorios y avisos para evitar que un lead valioso se enfríe.",
  },
  {
    icon: Plug,
    title: "Capa de conversión legal",
    description:
      "Se integra al trabajo del bufete y ayuda al equipo sin reemplazarlo.",
  },
] as const;

export const BILINGUAL_CONTENT = {
  en: "El sistema permite atención en inglés y español, mientras el equipo legal recibe la información estructurada en una sola cola operativa.",
  es: "Cada formulario, notificación y punto de contacto funciona en inglés y español. Tus clientes eligen idioma y tu equipo recibe datos listos para actuar.",
} as const;

export const TESTIMONIAL_PLACEHOLDERS = [
  {
    firm: "Espacio piloto 01",
    location: "San Juan, PR",
    quote: "Aquí irá el testimonio real del primer bufete piloto.",
  },
  {
    firm: "Espacio piloto 02",
    location: "Carolina, PR",
    quote: "Aquí irá el testimonio real del segundo bufete piloto.",
  },
  {
    firm: "Espacio piloto 03",
    location: "Ponce, PR",
    quote: "Aquí irá el testimonio real del tercer bufete piloto.",
  },
] as const;
