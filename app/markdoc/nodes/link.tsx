import type { ReactNode } from "react";

import { ExternalLinkIcon } from "lucide-react";

export function Link({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const external = href.includes("base-ui");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="transform-all inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 duration-150 ease-default outline-none hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
      {external && <ExternalLinkIcon className="size-3.5" />}
    </a>
  );
}
