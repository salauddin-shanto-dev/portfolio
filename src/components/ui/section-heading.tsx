import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  description?: ReactNode;
  action?: ReactNode;
  level?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  id,
  description,
  action,
  level = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = level;
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        <Heading
          id={id}
          className={cn(
            "font-semibold tracking-tight text-balance text-foreground",
            level === "h1" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <div className="text-pretty leading-relaxed text-muted-foreground">{description}</div>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
