import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/data";
import { siteUrl } from "@/lib/site";
import { homeCopy, servicesCopy } from "@/lib/notes";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${homeCopy.headline}`,
    template: `%s | ${company.name}`,
  },
  description: homeCopy.paragraphs[0],
  keywords: servicesCopy.items.map((item) => item.title),
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | ${homeCopy.headline}`,
    description: homeCopy.paragraphs[0],
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
    name: company.name,
    url: siteUrl,
    telephone: company.phoneHref,
  };

  return (
    <html lang="bg" className={`${inter.variable} ${montserrat.variable}`}>
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
