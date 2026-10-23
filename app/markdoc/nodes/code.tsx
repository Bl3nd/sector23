import type { ReactNode } from "react";

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-muted px-2 py-1 font-mono text-xs font-semibold text-primary">
      {children}
    </code>
  );
}
