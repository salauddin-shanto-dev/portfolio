import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects, otherProjects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <Section labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Selected work"
        title="Case studies"
        description="Production modernization work, written up with the context, constraints, and decisions behind it."
        action={
          <ButtonLink href="/projects" variant="secondary">
            All projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="featured" />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {otherProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
