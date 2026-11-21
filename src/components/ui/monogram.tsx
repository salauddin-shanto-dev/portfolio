import { cn } from "@/lib/utils";

interface MonogramProps {
  initials: string;
  size?: "sm" | "lg";
  className?: string;
}

/** Initials-based identity mark. Decorative: callers provide accessible text nearby. */
export function Monogram({ initials, size = "sm", className }: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center border border-border-strong bg-surface font-mono font-semibold text-foreground",
        size === "sm" && "size-8 rounded-sm text-xs tracking-tight",
        size === "lg" &&
          "size-28 rounded-lg text-4xl tracking-tighter sm:size-36 sm:text-5xl",
        className,
      )}
    >
      <span>{initials.slice(0, 1)}</span>
      <span className="text-accent">{initials.slice(1)}</span>
    </span>
  );
}
