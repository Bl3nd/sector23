"use client";

import type { ReactNode } from "react";

import { MenuIcon } from "lucide-react";

import DocsSidebar from "@/app/components/docs/docs-sidebar";
import { Button } from "@/registry/sector23/ui/button";
import {
  createDrawerHandle,
  DrawerTrigger,
} from "@/registry/sector23/ui/drawer";

const drawerHandle = createDrawerHandle();

export function DocsLayout({
  children,
  frontmatter: { title },
}: {
  children: ReactNode;
  frontmatter: { title?: string };
}) {
  return (
    <div className="flex flex-1 gap-4 px-4 sm:px-6 lg:px-8">
      <DocsSidebar handle={drawerHandle} />
      <article className="mt-2 flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-4">
          <DrawerTrigger
            handle={drawerHandle}
            render={<Button variant="ghost" />}
            className="sm:hidden"
          >
            <MenuIcon />
          </DrawerTrigger>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
        </div>
        {children}
      </article>
    </div>
  );
}
