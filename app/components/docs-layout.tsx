import type { ReactNode } from "react";

export function DocsLayout({
  children,
  frontmatter: { title },
}: {
  children: ReactNode;
  frontmatter: { title?: string };
}) {
  return (
    <>
      <div>
        <article>
          <h1>{title}</h1>
          {children}
        </article>
      </div>
    </>
  );
}
