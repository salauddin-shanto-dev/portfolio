/**
 * Centralized, validated site configuration.
 *
 * This is the ONLY module that reads `process.env`. Every component, metadata
 * helper, sitemap and robots file consumes configuration from `siteConfig`.
 *
 * Because the site is statically exported, Next.js inlines NEXT_PUBLIC_* values
 * at build time. Each variable must therefore be referenced with a literal
 * `process.env.NEXT_PUBLIC_*` expression (dynamic lookups are not inlined).
 *
 * Missing or malformed required values throw during the build with a clear
 * message. There are intentionally no silent fallback values.
 */

export interface SiteConfig {
  /** Canonical origin without trailing slash, e.g. https://example.github.io */
  readonly siteUrl: string;
  readonly siteName: string;
  readonly siteDescription: string;
  readonly siteAuthor: string;
  /** Open Graph locale, e.g. en_US */
  readonly locale: string;
  /** BCP 47 language tag for <html lang>, e.g. en-US */
  readonly htmlLang: string;
  readonly contact: {
    readonly email: string;
    readonly linkedinUrl: string;
    readonly githubUrl: string;
  };
  readonly integrations: {
    readonly googleSiteVerification: string | undefined;
    readonly analyticsId: string | undefined;
  };
}

class ConfigError extends Error {
  constructor(variable: string, problem: string) {
    super(
      `[config] ${variable} ${problem}. ` +
        `Set it in .env.local for local development, or as a GitHub Actions ` +
        `repository variable for deployment. See .env.example and README.md.`,
    );
    this.name = "ConfigError";
  }
}

function required(variable: string, value: string | undefined): string {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new ConfigError(variable, "is required but was not set");
  }
  return trimmed;
}

function optional(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function httpsUrl(variable: string, value: string): string {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new ConfigError(variable, `must be an absolute URL (received "${value}")`);
  }
  if (parsed.protocol !== "https:" && parsed.hostname !== "localhost") {
    throw new ConfigError(variable, `must use https (received "${value}")`);
  }
  return value;
}

function origin(variable: string, value: string): string {
  const url = new URL(httpsUrl(variable, value));
  if (url.pathname !== "/" || url.search || url.hash) {
    throw new ConfigError(
      variable,
      `must be an origin only, without path, query or hash (received "${value}")`,
    );
  }
  return url.origin;
}

function email(variable: string, value: string): string {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    throw new ConfigError(variable, `must be a valid email address (received "${value}")`);
  }
  return value;
}

function locale(variable: string, value: string): string {
  if (!/^[a-z]{2,3}(_[A-Z]{2})?$/.test(value)) {
    throw new ConfigError(variable, `must look like "en" or "en_US" (received "${value}")`);
  }
  return value;
}

function analyticsId(value: string | undefined): string | undefined {
  if (value && !/^G-[A-Z0-9]+$/.test(value)) {
    throw new ConfigError(
      "NEXT_PUBLIC_ANALYTICS_ID",
      `must be a Google Analytics 4 measurement ID like "G-XXXXXXXXXX" (received "${value}")`,
    );
  }
  return value;
}

function loadSiteConfig(): SiteConfig {
  const siteLocale = locale(
    "NEXT_PUBLIC_SITE_LOCALE",
    required("NEXT_PUBLIC_SITE_LOCALE", process.env.NEXT_PUBLIC_SITE_LOCALE),
  );

  return Object.freeze({
    siteUrl: origin(
      "NEXT_PUBLIC_SITE_URL",
      required("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL),
    ),
    siteName: required("NEXT_PUBLIC_SITE_NAME", process.env.NEXT_PUBLIC_SITE_NAME),
    siteDescription: required(
      "NEXT_PUBLIC_SITE_DESCRIPTION",
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    ),
    siteAuthor: required("NEXT_PUBLIC_SITE_AUTHOR", process.env.NEXT_PUBLIC_SITE_AUTHOR),
    locale: siteLocale,
    htmlLang: siteLocale.replace("_", "-"),
    contact: Object.freeze({
      email: email(
        "NEXT_PUBLIC_CONTACT_EMAIL",
        required("NEXT_PUBLIC_CONTACT_EMAIL", process.env.NEXT_PUBLIC_CONTACT_EMAIL),
      ),
      linkedinUrl: httpsUrl(
        "NEXT_PUBLIC_LINKEDIN_URL",
        required("NEXT_PUBLIC_LINKEDIN_URL", process.env.NEXT_PUBLIC_LINKEDIN_URL),
      ),
      githubUrl: httpsUrl(
        "NEXT_PUBLIC_GITHUB_URL",
        required("NEXT_PUBLIC_GITHUB_URL", process.env.NEXT_PUBLIC_GITHUB_URL),
      ),
    }),
    integrations: Object.freeze({
      googleSiteVerification: optional(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION),
      analyticsId: analyticsId(optional(process.env.NEXT_PUBLIC_ANALYTICS_ID)),
    }),
  });
}

export const siteConfig: SiteConfig = loadSiteConfig();

/** Builds an absolute URL on the configured origin, preserving trailing-slash routing. */
export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}
