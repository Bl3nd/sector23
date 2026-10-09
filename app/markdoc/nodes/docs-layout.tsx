import type { ReactNode } from "react";

export function DocsLayout({
  children,
  frontmatter: { title },
}: {
  children: ReactNode;
  frontmatter: { title?: string };
}) {
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
      <article className="flex flex-col gap-4">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        {children}
      </article>
    </div>
  );
}
