import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { FlowDiagram } from "@/components/projects/flow-diagram";
import { TagList } from "@/components/ui/tag";
import type { Principle, Project } from "@/content/types";

export const caseStudySections = [
  { id: "overview", label: "Overview" },
  { id: "background", label: "Background & problem" },
  { id: "role", label: "My role & ownership" },
  { id: "scope", label: "Scope" },
  { id: "challenges", label: "Technical challenges" },
  { id: "approach", label: "Engineering approach" },
  { id: "architecture", label: "Architecture" },
  { id: "contributions", label: "Key contributions" },
  { id: "technologies", label: "Technologies" },
  { id: "outcomes", label: "Outcomes & lessons" },
] as const;

type SectionId = (typeof caseStudySections)[number]["id"];

function CaseSection({ id, children }: { id: SectionId; children: ReactNode }) {
  const index = caseStudySections.findIndex((section) => section.id === id);
  const label = caseStudySections[index]?.label ?? id;
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="flex flex-col gap-5">
      <h2
        id={`${id}-heading`}
        className="flex items-baseline gap-3 text-xl font-semibold tracking-tight text-foreground"
      >
        <span className="font-mono text-sm text-accent" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        {label}
      </h2>
      {children}
    </section>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function PrincipleGrid({ items }: { items: Principle[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-2 rounded-lg border border-border p-5">
          <h3 className="font-medium text-foreground">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-16">
      <CaseSection id="overview">
        <Prose paragraphs={project.overview} />
      </CaseSection>

      <CaseSection id="background">
        <Prose paragraphs={project.background} />
      </CaseSection>

      <CaseSection id="role">
        <div className="rounded-lg border border-accent/30 bg-accent-subtle p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-strong">
            {project.ownership.label}
          </p>
          <p className="mt-2 text-foreground">{project.ownership.detail}</p>
        </div>
        <Prose paragraphs={project.role} />
      </CaseSection>

      <CaseSection id="scope">
        {project.scope.metrics.length > 0 ? (
          <dl className="grid grid-cols-3 gap-4">
            {project.scope.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-1 rounded-lg border border-border bg-surface p-5"
              >
                <dt className="order-2 text-sm text-muted-foreground">{metric.label}</dt>
                <dd className="order-1 font-mono text-3xl font-semibold text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
        <TagList items={project.scope.areas} />
      </CaseSection>

      <CaseSection id="challenges">
        <PrincipleGrid items={project.challenges} />
      </CaseSection>

      <CaseSection id="approach">
        <PrincipleGrid items={project.approach} />
      </CaseSection>

      <CaseSection id="architecture">
        <Prose paragraphs={project.architecture.summary} />
        {project.architecture.diagram ? (
          <FlowDiagram diagram={project.architecture.diagram} />
        ) : null}
        {project.architecture.layers ? (
          <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {project.architecture.layers.map((layer) => (
              <div key={layer.name} className="flex flex-col gap-1 bg-background p-5">
                <dt className="font-mono text-sm text-foreground">{layer.name}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {layer.description}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </CaseSection>

      <CaseSection id="contributions">
        <BulletList items={project.contributions} />
      </CaseSection>

      <CaseSection id="technologies">
        <TagList items={project.technologies} tone="accent" />
      </CaseSection>

      <CaseSection id="outcomes">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-foreground">Engineering outcomes</h3>
            <BulletList items={project.outcomes} />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-foreground">Lessons learned</h3>
            <ul className="flex flex-col gap-3">
              {project.lessons.map((lesson) => (
                <li
                  key={lesson}
                  className="border-l-2 border-border-strong pl-4 leading-relaxed text-muted-foreground"
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseSection>
    </div>
  );
}
