import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const siteUrl = "https://stilenmaks.bg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Строителна компания`,
    template: `%s | ${company.name}`,
  },
  description:
    "Строителна компания с над 15 години опит в жилищно и промишлено строителство, ремонти и реконструкции. Качествено изпълнение в срок.",
  keywords: [
    "строителна фирма",
    "жилищно строителство",
    "промишлено строителство",
    "ремонти",
    "реконструкции",
    "груб строеж",
    "строителство София",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — Строителна компания`,
    description:
      "Над 15 години опит в жилищно и промишлено строителство. Качествено изпълнение в срок.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.legalName,
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressCountry: "BG",
    },
  };

  return (
    <html lang="bg" className={`${manrope.variable} ${oswald.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-graphite-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Към съдържанието
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
