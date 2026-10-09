import type { ReactNode } from "react";

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-foreground">{children}</p>;
}
