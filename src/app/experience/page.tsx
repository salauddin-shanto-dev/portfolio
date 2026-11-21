import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { experience } from "@/content/experience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experience",
  description:
    "Professional experience: software engineering roles, positions held, and the backend and modernization work done in each.",
  path: "/experience/",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional experience"
        description="Each position is listed separately, newest first, with the work it covered."
      />
      <Section labelledBy="timeline-heading" bordered={false}>
        <h2 id="timeline-heading" className="sr-only">
          Employment history
        </h2>
        <ExperienceTimeline employers={experience} headingLevel="h3" />
      </Section>
    </>
  );
}
