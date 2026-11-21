import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@/components/layout/analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { absoluteUrl, siteConfig } from "@/config/env";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteName} — Software Engineer`,
    template: `%s — ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.siteAuthor, url: absoluteUrl("/") }],
  creator: siteConfig.siteAuthor,
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "PHP",
    "Laravel",
    "REST API",
    "Legacy Modernization",
    "MySQL",
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} — Software Engineer`,
    description: siteConfig.siteDescription,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} — Software Engineer`,
    description: siteConfig.siteDescription,
  },
  robots: { index: true, follow: true },
  ...(siteConfig.integrations.googleSiteVerification
    ? { verification: { google: siteConfig.integrations.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0c0d0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.htmlLang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
