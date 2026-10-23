import type { ReactNode } from "react";

import Link from "next/link";

export function DocsLayout({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <main className="flex flex-col gap-4 px-4 sm:px-4">
      <div className="gap-4 px-2">
        <article className="mt-2 flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {children}
        </article>
      </div>
      <div className="mx-auto pb-4">
        <p className="text-sm text-muted-foreground">
          Powered by{" "}
          <Link
            href="https://markdoc.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            Markdoc
          </Link>
        </p>
      </div>
    </main>
  );
}
