import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/env";
import { mainNavigation } from "@/content/navigation";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", ...mainNavigation.map((item) => item.href)];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}/`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.6,
  }));
}
