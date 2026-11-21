import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/env";

interface PageMetadataInput {
  /** Page title; the root layout template appends the site name. */
  title?: string;
  description?: string;
  /** Route path with trailing slash, e.g. "/about/". */
  path: string;
  type?: "website" | "article" | "profile";
}

/** Builds page-specific metadata with canonical and Open Graph URLs from site config. */
export function createPageMetadata({
  title,
  description = siteConfig.siteDescription,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} — ${siteConfig.siteName}` : siteConfig.siteName;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
