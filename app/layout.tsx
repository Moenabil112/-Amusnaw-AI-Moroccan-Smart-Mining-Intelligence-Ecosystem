import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { SiteChrome } from "@/components/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Amusnaw AI — Moroccan Smart Mining Intelligence Ecosystem",
    template: "%s · Amusnaw AI",
  },
  description:
    "A structured digital window for mining intelligence, governance, and strategic decision-making.",
  applicationName: "Amusnaw AI",
  keywords: [
    "Amusnaw AI",
    "Morocco",
    "mining intelligence",
    "mineral governance",
    "QASSAS",
    "Aguelmous",
    "Isseksi",
    "HYRION",
    "ZYNTRA",
    "AKANIL",
  ],
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-graphite-950 text-graphite-100 antialiased">
        <I18nProvider>
          <SiteChrome>{children}</SiteChrome>
        </I18nProvider>
      </body>
    </html>
  );
}
