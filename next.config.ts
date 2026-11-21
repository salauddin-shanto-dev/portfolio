import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * This repository is a GitHub Pages *user site* (salauddin-shanto-dev.github.io),
 * which is served from the domain root, so no `basePath` or `assetPrefix` is needed.
 *
 * `output: "export"` and `trailingSlash` are applied to production builds only.
 * GitHub Pages needs `/about/index.html`-style output, but in development the
 * trailing-slash rewrites break client-side navigation behind preview proxies
 * (RSC payload requests for `/about/` fail and navigation stalls).
 */
const isProductionBuild = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProductionBuild ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
