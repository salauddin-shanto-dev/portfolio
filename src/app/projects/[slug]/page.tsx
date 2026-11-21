import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CaseStudy, caseStudySections } from "@/components/projects/case-study";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug, projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createPageMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}/`,
    type: "article",
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="border-b border-border">
        <Container className="flex flex-col gap-8 py-12 sm:py-16">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>
          <div className="flex max-w-3xl flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Tag tone={project.ownership.type === "independent" ? "accent" : "neutral"}>
                {project.ownership.label}
              </Tag>
              {project.organization ? <Tag>{project.organization}</Tag> : null}
              {project.status ? <Tag tone="dashed">{project.status}</Tag> : null}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
            {project.externalLink ? (
              <a
                href={project.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-accent-strong underline-offset-4 hover:underline"
              >
                {project.externalLink.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <ol className="sticky top-[calc(var(--header-height)+2rem)] flex flex-col gap-1 border-l border-border">
            {caseStudySections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                >
                  <span className="font-mono text-xs leading-5" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="min-w-0 max-w-3xl">
          <CaseStudy project={project} />
        </div>
      </Container>

      {next && next.slug !== project.slug ? (
        <Container className="border-t border-border py-12">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-2 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Next case study
              </span>
              <span className="font-semibold text-foreground">{next.title}</span>
            </span>
            <ArrowRight
              className="size-5 text-muted-foreground transition-colors group-hover:text-accent"
              aria-hidden="true"
            />
          </Link>
        </Container>
      ) : null}
    </article>
  );
}
