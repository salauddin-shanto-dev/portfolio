import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-strong border border-transparent",
  secondary:
    "border border-border-strong text-foreground hover:border-muted-foreground hover:bg-surface",
  ghost: "text-muted-foreground hover:text-foreground",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors",
    variants[variant],
    className,
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
