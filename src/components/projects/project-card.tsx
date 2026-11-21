import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/content/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
  headingLevel?: "h2" | "h3";
}

export function ProjectCard({ project, variant = "compact", headingLevel = "h3" }: ProjectCardProps) {
  const Heading = headingLevel;
  const featured = variant === "featured";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-6 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-8",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Tag tone={project.ownership.type === "independent" ? "accent" : "neutral"}>
          {project.ownership.label}
        </Tag>
        {project.status ? <Tag tone="dashed">MVP · Not deployed</Tag> : null}
      </div>

      <div className="flex flex-col gap-3">
        <Heading
          className={cn(
            "font-semibold tracking-tight text-balance text-foreground",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </Heading>
        <p className="text-pretty leading-relaxed text-muted-foreground">{project.tagline}</p>
      </div>

      {featured && project.scope.metrics.length > 0 ? (
        <dl className="grid grid-cols-3 gap-4 border-y border-border py-5">
          {project.scope.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <dt className="order-2 text-xs text-muted-foreground">{metric.label}</dt>
              <dd className="order-1 font-mono text-2xl font-semibold text-foreground">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-auto flex items-end justify-between gap-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          {project.technologies.slice(0, featured ? 5 : 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
