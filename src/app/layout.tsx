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
    default: "SmartData Legal | AI-Powered Legal Intake for Puerto Rico Law Firms",
    template: "%s | SmartData Legal",
  },
  description:
    "Automate client intake for your law firm. Respond in under 60 seconds, score leads with AI, and never lose a potential client again. Bilingual EN/ES.",
  keywords: [
    "legal intake",
    "law firm automation",
    "AI legal",
    "Puerto Rico law firms",
    "bilingual intake",
    "lead scoring",
    "client intake software",
  ],
  authors: [{ name: "SmartData Legal" }],
  openGraph: {
    title: "SmartData Legal | AI-Powered Legal Intake",
    description:
      "Automate client intake for your law firm. Respond in under 60 seconds with bilingual AI-powered lead capture.",
    url: "https://smartdatalegal.com",
    siteName: "SmartData Legal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartData Legal | AI-Powered Legal Intake",
    description:
      "Automate client intake for your law firm. Respond in under 60 seconds with bilingual AI-powered lead capture.",
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
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
