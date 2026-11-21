import type { FlowDiagram as FlowDiagramData } from "@/content/types";

/** Accessible, text-based flow diagram rendered as an ordered list. */
export function FlowDiagram({ diagram }: { diagram: FlowDiagramData }) {
  return (
    <figure className="flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 sm:p-8">
      <figcaption className="flex flex-col gap-1">
        <span className="font-semibold text-foreground">{diagram.title}</span>
        <span className="text-sm text-muted-foreground">{diagram.description}</span>
      </figcaption>
      <ol className="flex flex-col">
        {diagram.steps.map((step, index) => {
          const last = index === diagram.steps.length - 1;
          return (
            <li key={step.name} className="grid grid-cols-[2rem_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-8 items-center justify-center rounded-sm border border-accent/40 bg-accent-subtle font-mono text-xs text-accent-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {!last ? <span aria-hidden="true" className="w-px flex-1 bg-border-strong" /> : null}
              </div>
              <div className={last ? "pb-0" : "pb-6"}>
                <p className="pt-1 font-mono text-sm font-medium text-foreground">{step.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
