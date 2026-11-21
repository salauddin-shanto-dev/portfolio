import { TagList } from "@/components/ui/tag";
import type { SkillGroup } from "@/content/types";

export function SkillsGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {groups.map((group) => (
        <div
          key={group.id}
          className={
            group.learning
              ? "flex flex-col gap-5 rounded-lg border border-dashed border-border-strong p-6"
              : "flex flex-col gap-5 rounded-lg border border-border bg-surface p-6"
          }
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-foreground">{group.title}</h3>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </div>
          <TagList
            items={group.items}
            tone={group.learning ? "dashed" : group.id === "core" ? "accent" : "neutral"}
          />
        </div>
      ))}
    </div>
  );
}
