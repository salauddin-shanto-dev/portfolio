import Link from "next/link";
import { Container } from "@/components/ui/container";
import { mainNavigation } from "@/content/navigation";
import { profile } from "@/content/profile";
import { contactLinks } from "@/lib/contact-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-2">
          <p className="text-sm font-semibold text-foreground">{profile.name}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {profile.title} · Backend, PHP &amp; Laravel, API engineering, and legacy modernization.
          </p>
        </div>

        <div className="flex gap-16">
          <nav aria-label="Footer">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Pages
            </p>
            <ul className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="flex flex-col gap-2">
              {contactLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                    {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="font-mono text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} ${profile.name}`}
        </p>
      </Container>
    </footer>
  );
}
