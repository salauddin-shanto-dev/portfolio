import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  tone?: "neutral" | "accent" | "dashed";
  className?: string;
}

const tones = {
  neutral: "border-border bg-surface text-muted-foreground",
  accent: "border-accent/30 bg-accent-subtle text-accent-strong",
  dashed: "border-dashed border-border-strong text-muted-foreground",
} as const;

export function Tag({ children, tone = "neutral", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-xs leading-5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, tone }: { items: string[]; tone?: TagProps["tone"] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Tag tone={tone}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
