import { PageHeader } from "@/components/layout/page-header";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { createPageMetadata } from "@/lib/metadata";
import { formatPeriod } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "About",
  description: `About ${profile.name}: backend engineering, PHP and Laravel, legacy modernization, and engineering interests.`,
  path: "/about/",
  type: "profile",
});

const storySections = [
  { id: "backend", title: "Backend engineering background", paragraphs: profile.about.backendBackground },
  { id: "modernization", title: "Legacy modernization", paragraphs: profile.about.legacyModernization },
  { id: "interests", title: "Engineering interests", paragraphs: profile.about.engineeringInterests },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`${profile.name}, ${profile.title}`}
        description={
          <div className="flex flex-col gap-4">
            {profile.about.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
      />

      <Section labelledBy="story-heading">
        <h2 id="story-heading" className="sr-only">
          Background
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          {storySections.map((section) => (
            <div key={section.id} className="flex flex-col gap-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h3 className="font-semibold text-foreground">Systems I want to go deeper on</h3>
          <p className="leading-relaxed text-muted-foreground">{profile.about.systemsInterests.intro}</p>
          <TagList items={profile.about.systemsInterests.topics} tone="dashed" />
        </div>
      </Section>

      <Section labelledBy="skills-heading">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Technical toolkit"
          description="Grouped by depth. The dashed group is what I'm actively learning, not production experience."
        />
        <SkillsGrid groups={skillGroups} />
      </Section>

      <Section labelledBy="education-heading" bordered={false}>
        <SectionHeading id="education-heading" eyebrow="Education" title="Education" />
        <ul className="flex flex-col gap-4">
          {education.map((item) => (
            <li
              key={item.institution}
              className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-foreground">{item.degree}</h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </div>
              <div className="flex flex-col gap-1 sm:items-end">
                <p className="font-mono text-sm text-foreground">{item.grade}</p>
                <p className="font-mono text-xs text-muted-foreground">{formatPeriod(item.period)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
