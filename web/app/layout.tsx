import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BRAND } from "@/lib/brand";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.shortName} — Byggfirma i Järfälla & Stockholm | Badrum, kök, totalrenovering`,
    template: `%s | ${BRAND.shortName}`,
  },
  description:
    "Västerorts Bygg AB i Järfälla — BKR-behörig badrums- och köksrenovering, totalrenovering, stambyte och fastighetsservice i hela Storstockholm. 28 år i branschen och AAA-rating.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: BRAND.shortName,
    images: ["/og-image.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">Hoppa till innehåll</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
