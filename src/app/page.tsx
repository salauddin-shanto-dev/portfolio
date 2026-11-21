import { ArrowRight } from "lucide-react";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { FocusAreas } from "@/components/home/focus-areas";
import { Hero } from "@/components/home/hero";
import { Philosophy } from "@/components/home/philosophy";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ path: "/", type: "profile" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <FeaturedProjects />
      <Section labelledBy="experience-heading">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've worked"
          action={
            <ButtonLink href="/experience" variant="secondary">
              Full experience
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          }
        />
        <ExperienceTimeline employers={experience} compact />
      </Section>
      <Philosophy />
      <ContactCta />
    </>
  );
}
