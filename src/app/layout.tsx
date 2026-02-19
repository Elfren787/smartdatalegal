import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SmartData Legal | Intake legal con IA para bufetes en Puerto Rico",
    template: "%s | SmartData Legal",
  },
  description:
    "Automatiza intake legal para tu firma. Responde en menos de 60 segundos, prioriza leads con IA y mejora el trabajo de paralegales y abogados.",
  keywords: [
    "intake legal",
    "automatizacion para bufetes",
    "IA legal",
    "bufetes en Puerto Rico",
    "intake bilingue",
    "priorizacion de leads",
    "software para firmas legales",
  ],
  authors: [{ name: "SmartData Legal" }],
  openGraph: {
    title: "SmartData Legal | Intake legal con IA",
    description:
      "Plataforma de intake legal bilingue para responder mas rapido y no perder leads valiosos.",
    url: "https://smartdatalegal.com",
    siteName: "SmartData Legal",
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartData Legal | Intake legal con IA",
    description:
      "Intake bilingue con IA para bufetes que necesitan velocidad, control y conversion.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
