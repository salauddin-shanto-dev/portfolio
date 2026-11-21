import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="border-b border-border">
      <Container className="flex flex-col gap-8 py-16 sm:py-20">
        <SectionHeading level="h1" eyebrow={eyebrow} title={title} description={description} />
        {children}
      </Container>
    </header>
  );
}
