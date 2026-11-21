import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface SectionProps {
  labelledBy: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export function Section({ labelledBy, children, className, bordered = true }: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(bordered && "border-b border-border", className)}
    >
      <Container className="flex flex-col gap-10 py-16 sm:py-24">{children}</Container>
    </section>
  );
}
