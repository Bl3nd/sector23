"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import { Button } from "@/registry/sector23/ui/button";
import {
  createDrawerHandle,
  DrawerTrigger,
} from "@/registry/sector23/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  type NavigationMenuLinkProps,
} from "@/registry/sector23/ui/navigation-menu";

import DocsSidebar from "./docs-sidebar";

const drawerHandle = createDrawerHandle();

export default function DocsHeader() {
  return (
    <>
      <header className="flex h-(--header-height) items-center justify-between border-b border-border px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <DrawerTrigger
            handle={drawerHandle}
            render={<Button variant="ghost" />}
            className="sm:hidden"
          >
            <MenuIcon />
          </DrawerTrigger>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs">Docs</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <NextLink
            href="https://github.com/Bl3nd/sector23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-8 shrink-0 items-center justify-center rounded-md px-2 transition-all duration-150 ease-default outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Image
              src="/github/GitHub_Invertocat_Black.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="block size-4 shrink-0 dark:hidden"
            />
            <Image
              src="/github/GitHub_Invertocat_White.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="hidden size-4 shrink-0 dark:block"
            />
          </NextLink>
        </div>
      </header>

      <DocsSidebar handle={drawerHandle} />
    </>
  );
}

function Link(props: NavigationMenuLinkProps) {
  return (
    <NavigationMenuLink
      render={<NextLink href={props.href ?? "#"} />}
      className="flex h-8 items-center px-2 text-sm font-medium text-foreground"
      {...props}
    />
  );
}
