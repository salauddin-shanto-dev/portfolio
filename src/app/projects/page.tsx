import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects, otherProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Engineering case studies: CodeIgniter to Laravel migration, Laravel 7 to 12 modernization, a large CMS content migration, government systems work, and a personal MVP.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Engineering case studies"
        description="Each case study covers the problem, my role and ownership, the constraints, and the decisions made. Ownership is labeled on every project so it's clear what I did independently and what was team work."
      />
      <Section labelledBy="featured-heading">
        <SectionHeading id="featured-heading" eyebrow="Featured" title="Modernization work" />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </Section>
      <Section labelledBy="other-heading" bordered={false}>
        <SectionHeading id="other-heading" eyebrow="More" title="Other projects" />
        <div className="grid gap-6 md:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
