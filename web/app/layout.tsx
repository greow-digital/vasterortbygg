import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BRAND } from "@/lib/brand";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
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
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-dark)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
