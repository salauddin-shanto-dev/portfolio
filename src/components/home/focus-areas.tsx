import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

export function FocusAreas() {
  return (
    <Section labelledBy="focus-heading">
      <SectionHeading
        id="focus-heading"
        eyebrow="What I work on"
        title="Backend systems that stay maintainable"
        description={
          <div className="flex flex-col gap-3">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
      />
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {profile.focusAreas.map((area, index) => (
          <li key={area.title} className="flex flex-col gap-3 bg-background p-6">
            <span className="font-mono text-xs text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-medium text-foreground">{area.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
