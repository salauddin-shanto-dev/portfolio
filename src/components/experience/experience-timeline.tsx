import Link from "next/link";
import { getProjectBySlug } from "@/content/projects";
import type { Employer } from "@/content/types";
import { formatPeriod } from "@/lib/utils";

interface ExperienceTimelineProps {
  employers: Employer[];
  /** Compact mode hides focus lists, used on the homepage. */
  compact?: boolean;
  headingLevel?: "h2" | "h3";
}

export function ExperienceTimeline({
  employers,
  compact = false,
  headingLevel = "h3",
}: ExperienceTimelineProps) {
  const CompanyHeading = headingLevel;
  const RoleHeading = headingLevel === "h2" ? "h3" : "h4";

  return (
    <ol className="flex flex-col gap-6">
      {employers.map((employer) => (
        <li
          key={employer.id}
          className="grid gap-6 rounded-lg border border-border bg-surface p-6 sm:p-8 md:grid-cols-[14rem_1fr]"
        >
          <div className="flex flex-col gap-1">
            <CompanyHeading className="font-semibold tracking-tight text-foreground">
              {employer.company}
            </CompanyHeading>
            <p className="text-sm text-muted-foreground">
              {employer.roles.length > 1 ? `${employer.roles.length} positions` : "1 position"}
            </p>
          </div>

          <ol className="flex flex-col">
            {employer.roles.map((role, index) => {
              const last = index === employer.roles.length - 1;
              return (
                <li key={role.title} className="grid grid-cols-[1rem_1fr] gap-4">
                  <div className="flex flex-col items-center pt-1.5">
                    <span
                      aria-hidden="true"
                      className={
                        role.period.end === "present"
                          ? "size-2.5 rounded-full bg-accent ring-4 ring-accent-subtle"
                          : "size-2.5 rounded-full border border-border-strong bg-background"
                      }
                    />
                    {!last ? <span aria-hidden="true" className="mt-2 w-px flex-1 bg-border" /> : null}
                  </div>
                  <div className={last ? "flex flex-col gap-3" : "flex flex-col gap-3 pb-8"}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <RoleHeading className="font-medium text-foreground">{role.title}</RoleHeading>
                      <p className="font-mono text-xs text-muted-foreground">
                        {formatPeriod(role.period)}
                      </p>
                    </div>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {role.summary}
                    </p>
                    {!compact ? (
                      <ul className="flex flex-wrap gap-2">
                        {role.focus.map((item) => (
                          <li
                            key={item}
                            className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>

          {!compact && employer.relatedProjects?.length ? (
            <div className="border-t border-border pt-5 md:col-start-2">
              <p className="text-sm text-muted-foreground">
                {"Related: "}
                {employer.relatedProjects.map((slug, index) => {
                  const project = getProjectBySlug(slug);
                  if (!project) return null;
                  return (
                    <span key={slug}>
                      {index > 0 ? ", " : null}
                      <Link
                        href={`/projects/${slug}`}
                        className="text-foreground underline decoration-border-strong underline-offset-4 hover:decoration-accent"
                      >
                        {project.title}
                      </Link>
                    </span>
                  );
                })}
              </p>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
