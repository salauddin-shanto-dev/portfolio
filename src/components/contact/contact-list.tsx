import { ArrowUpRight, Mail } from "lucide-react";
import { contactLinks } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

export function ContactList() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {contactLinks.map((link) => {
        const Icon = link.id === "email" ? Mail : ArrowUpRight;
        return (
          <li key={link.id}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "group flex h-full flex-col gap-4 rounded-lg border p-6 transition-colors",
                link.priority === "primary"
                  ? "border-border-strong bg-surface hover:border-accent"
                  : "border-border hover:border-border-strong",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {link.label}
                </span>
                <Icon
                  className="size-4 text-muted-foreground transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <span className="break-all font-medium text-foreground">{link.display}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {link.description}
              </span>
              {link.external ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
