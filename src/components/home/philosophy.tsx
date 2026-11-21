import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

export function Philosophy() {
  return (
    <Section labelledBy="philosophy-heading">
      <SectionHeading
        id="philosophy-heading"
        eyebrow="How I work"
        title="Engineering principles"
      />
      <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {profile.philosophy.map((item) => (
          <li key={item.title} className="flex flex-col gap-2 border-l-2 border-accent pl-5">
            <h3 className="font-medium text-foreground">{item.title}</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
