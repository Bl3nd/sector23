import type { ReactNode } from "react";

import { ExternalLinkIcon } from "lucide-react";

export function Link({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transform-all inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 duration-150 ease-default outline-none hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
      <ExternalLinkIcon className="size-3.5" />
    </a>
  );
}
