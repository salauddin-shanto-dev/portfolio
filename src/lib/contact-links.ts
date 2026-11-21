import { siteConfig } from "@/config/env";

export type ContactLinkId = "email" | "linkedin" | "github";

export interface ContactLink {
  id: ContactLinkId;
  label: string;
  /** Human-readable value, e.g. the email address or profile handle. */
  display: string;
  href: string;
  external: boolean;
  /** Primary channels are emphasized; GitHub is intentionally secondary. */
  priority: "primary" | "secondary";
  description: string;
}

function displayUrl(url: string): string {
  const { hostname, pathname } = new URL(url);
  return `${hostname.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}`;
}

/** All public contact channels, derived from centralized configuration. */
export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    display: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
    priority: "primary",
    description: "The most direct way to reach me about roles and opportunities.",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    display: displayUrl(siteConfig.contact.linkedinUrl),
    href: siteConfig.contact.linkedinUrl,
    external: true,
    priority: "primary",
    description: "Professional profile and work history.",
  },
  {
    id: "github",
    label: "GitHub",
    display: displayUrl(siteConfig.contact.githubUrl),
    href: siteConfig.contact.githubUrl,
    external: true,
    priority: "secondary",
    description:
      "Personal and public code. Most of my professional work lives in private repositories.",
  },
];

export function getContactLink(id: ContactLinkId): ContactLink {
  const link = contactLinks.find((item) => item.id === id);
  if (!link) throw new Error(`Unknown contact link: ${id}`);
  return link;
}
