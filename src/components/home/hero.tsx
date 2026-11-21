import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Monogram } from "@/components/ui/monogram";
import { profile } from "@/content/profile";
import { getContactLink } from "@/lib/contact-links";

export function Hero() {
  const email = getContactLink("email");
  const linkedin = getContactLink("linkedin");

  return (
    <section aria-labelledby="hero-heading" className="border-b border-border">
      <Container className="flex flex-col gap-12 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-3xl flex-col gap-8">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {profile.positioning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-5">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl"
            >
              {profile.name}
              <span className="block text-muted-foreground">{profile.title}</span>
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/projects">
              View case studies
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={email.href} variant="secondary">
              Email me
            </ButtonLink>
            <ButtonLink href={linkedin.href} variant="ghost" external>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
        <Monogram initials={profile.initials} size="lg" className="hidden lg:inline-flex" />
      </Container>
    </section>
  );
}
