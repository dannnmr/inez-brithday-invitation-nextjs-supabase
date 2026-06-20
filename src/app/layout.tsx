import type { Metadata } from "next";
import { Outfit, Great_Vibes, Pinyon_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/invitation";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const formattedDate = `${siteConfig.event.date.day} de ${siteConfig.event.date.month} de ${siteConfig.event.date.year}`;
const formattedTime = siteConfig.event.time;
const descriptionText = `Acompáñame a celebrar ${siteConfig.client.eventType === "Mis 60 Años" ? "mi cumpleaños" : siteConfig.client.eventType} el ${formattedDate} a las ${formattedTime}. Una noche mágica llena de amor, música y recuerdos. ¡Espero verte allí!`;

export const metadata: Metadata = {
  title: `${siteConfig.client.eventType} de ${siteConfig.client.name} — ¡Estás Invitado!`,
  description: descriptionText,
  icons: {
    icon: "/images/decorativas_v2/logo_brochev4.png",
    shortcut: "/images/decorativas_v2/logo_brochev4.png",
    apple: "/images/decorativas_v2/logo_brochev4.png",
  },
  openGraph: {
    title: `${siteConfig.client.eventType} de ${siteConfig.client.name} — ¡Estás Invitado!`,
    description: descriptionText,
    siteName: `${siteConfig.client.eventType} - ${siteConfig.client.name}`,
    images: [
      {
        url: "/images/invitation/metadata_logo.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.client.eventType} de ${siteConfig.client.name}`,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.client.eventType} de ${siteConfig.client.name} — ¡Estás Invitado!`,
    description: descriptionText,
    images: ["/images/invitation/metadata_logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${greatVibes.variable} ${pinyonScript.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
