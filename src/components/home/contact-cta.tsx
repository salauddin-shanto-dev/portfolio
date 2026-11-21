import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getContactLink } from "@/lib/contact-links";

export function ContactCta() {
  const email = getContactLink("email");
  const linkedin = getContactLink("linkedin");

  return (
    <section aria-labelledby="cta-heading">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-col gap-8 rounded-lg border border-border-strong bg-surface p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
              Working on a backend or modernization problem?
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {"I'm open to software engineering roles and conversations. Email is the fastest way to reach me."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={email.href}>{email.display}</ButtonLink>
            <ButtonLink href={linkedin.href} variant="secondary" external>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
