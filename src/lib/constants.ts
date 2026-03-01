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
    title: "Recupera leads que hoy se pierden",
    description:
      "Dashboard centralizado donde ves qué leads están en riesgo SLA antes de que se enfríen. Nunca más pierdes un caso por no saber que existía.",
  },
  {
    icon: Brain,
    title: "Tu equipo actúa, no captura datos",
    description:
      "La IA resume casos complejos en 30 segundos y los clasifica por prioridad. Paralegales llaman listos para avanzar, no para hacer preguntas básicas.",
  },
  {
    icon: Upload,
    title: "Evidencia desde el primer contacto",
    description:
      "Fotos del accidente, reportes médicos y documentos llegan con el lead. Tu equipo tiene contexto completo antes de la primera llamada.",
  },
  {
    icon: GitBranch,
    title: "Responsabilidad clara por cada lead",
    description:
      "Cada lead tiene propietario, estado y SLA visible. Sin leads huérfanos. Sabes exactamente quién tiene qué y cuánto lleva sin acción.",
  },
  {
    icon: Bell,
    title: "Cero leads enfriados",
    description:
      "Alertas automáticas antes de que un lead valioso se enfríe. El sistema te avisa — no depende de que alguien se acuerde.",
  },
  {
    icon: Plug,
    title: "Se adapta a tu despacho, no al revés",
    description:
      "No reemplaza al paralegal ni a tu CRM. Le quita el trabajo repetitivo y entrega leads listos para accionar.",
  },
] as const;

export const BILINGUAL_CONTENT = {
  en: "El sistema permite atención en inglés y español, mientras el equipo legal recibe la información estructurada en una sola cola operativa.",
  es: "Cada formulario, notificación y punto de contacto funciona en inglés y español. Tus clientes eligen idioma y tu equipo recibe datos listos para actuar.",
} as const;

export const PILOT_BENEFITS = [
  {
    title: "Configuración incluida",
    description: "Nosotros hacemos todo el setup. Tu equipo solo recibe leads listos para actuar.",
  },
  {
    title: "30 días para ver resultados",
    description: "Sin contratos largos. Ve los números reales antes de comprometerte.",
  },
  {
    title: "Soporte directo con el fundador",
    description: "Trabajas conmigo directamente. Cero burocracia, cero tickets de soporte genéricos.",
  },
] as const;

export const INDUSTRY_STATS = [
  { value: "78%", label: "de clientes firman con el primer bufete que responde" },
  { value: "30–50%", label: "de leads se pierden por respuesta lenta" },
  { value: "< 5 min", label: "es la ventana crítica para convertir un lead caliente" },
] as const;

export const TARGET_AUDIENCE = {
  title: "¿Es SmartData Legal para tu firma?",
  subtitle: "Diseñado para bufetes en Puerto Rico que ya invierten en crecer.",
  criteria: [
    "Inviertes en anuncios (Google, Facebook, referrals) y recibes 10+ leads al mes",
    "Practicas: lesiones personales, negligencia médica, derechos civiles o acciones de clase",
    "Tienes 1–20 personas en el equipo (socios, abogados, paralegales)",
    "Pierdes casos porque el lead se enfría antes de la primera llamada",
  ],
} as const;

export const ROI_DATA = {
  caseValue: "$15,000",
  casesPerMonth: "2–3",
  monthlyRecovery: "$30,000–$45,000",
  paybackPeriod: "menos de 30 días",
} as const;

export const ONBOARDING_STEPS = [
  {
    day: "Día 1–3",
    title: "Configuración completa",
    description: "Configuramos tu cuenta, personalizamos el intake para tus áreas de práctica y conectamos notificaciones.",
  },
  {
    day: "Día 4–7",
    title: "Training del equipo",
    description: "Sesión en vivo con tu equipo. Les enseñamos a usar la cola de leads y el dashboard en 30 minutos.",
  },
  {
    day: "Día 8–30",
    title: "Acompañamiento activo",
    description: "Monitoreo de resultados, ajustes al scoring y soporte directo por WhatsApp.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Cuánto cuesta?",
    answer: "Tenemos un plan de piloto a precio especial para los primeros bufetes. Agenda un demo de 15 minutos y te damos los detalles según el tamaño de tu firma.",
  },
  {
    question: "¿Hay contrato a largo plazo?",
    answer: "No. El piloto es de 30 días sin compromiso. Si no ves valor, cancelas sin drama.",
  },
  {
    question: "¿Es segura la información de mis clientes?",
    answer: "Sí. Los datos están encriptados, almacenados en servidores cloud seguros y nunca se usan para entrenar IA. Solo tu equipo autorizado tiene acceso.",
  },
  {
    question: "¿Qué necesito para el demo?",
    answer: "Solo 15 minutos y una laptop o celular. Te mostramos la plataforma en vivo con un caso simulado de tu área de práctica.",
  },
  {
    question: "¿Se integra con Clio, MyCase u otros sistemas?",
    answer: "SmartData Legal maneja el intake — el momento antes de que el caso entre a tu CRM. Los datos se exportan fácilmente a cualquier sistema que ya uses.",
  },
] as const;
