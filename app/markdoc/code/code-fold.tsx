"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";

export function CodeFold({
  visibleLines,
  totalLines,
  children,
}: {
  visibleLines: number;
  totalLines: number;
  children: ReactNode;
}): ReactNode {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div
      data-slot="code-fold"
      data-expanded={expanded}
      style={{ "--fold-lines": visibleLines } as CSSProperties}
    >
      <div id={contentId} className="relative">
        {children}
        {expanded ? undefined : (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-(--twp-background) to-transparent"
          />
        )}
      </div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded(!expanded)}
        className="w-full border-t border-border bg-background px-4 py-2 text-xs text-muted-foreground hover:text-foreground"
      >
        {expanded ? "Show less" : `Show all ${totalLines} lines`}
      </button>
    </div>
  );
}
