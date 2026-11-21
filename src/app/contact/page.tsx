import { ContactList } from "@/components/contact/contact-list";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch about software engineering roles, backend work, or modernization projects.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <PageHeader
      eyebrow="Contact"
      title="Get in touch"
      description="I'm open to software engineering roles and conversations about backend and modernization work. Email or LinkedIn are the best ways to reach me."
    >
      <ContactList />
    </PageHeader>
  );
}
