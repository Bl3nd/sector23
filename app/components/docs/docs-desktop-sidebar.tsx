"use client";

import { ChevronDownIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSyncExternalStore } from "react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/sector23/ui/collapsible";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";
import {
  Tooltip,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/sector23/ui/tooltip";

import { docs } from "./docs-content";

function subscribeHydrated() {
  return () => {};
}

export default function DocsDesktopSidebar() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useSyncExternalStore(
    subscribeHydrated,
    () => true,
    () => false,
  );
  const dark = hydrated && resolvedTheme === "dark";

  return (
    <aside className="hidden h-full w-80 flex-col border-e border-border sm:flex">
      <div className="flex items-center justify-between gap-3 py-4.5 pe-2 sm:ps-8 lg:ps-10">
        <h1 className="text-sm font-semibold text-foreground">
          Sector23 Documentation
        </h1>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Switch
                  checked={dark}
                  className="dark:bg-primary"
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                >
                  <SwitchThumb className="dark:translate-x-3.75 dark:bg-primary-foreground">
                    <SunIcon className="dark:hidden" />
                    <MoonIcon className="hidden dark:block" />
                  </SwitchThumb>
                </Switch>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipPositioner>
                  <TooltipPopup>
                    <TooltipArrow />
                    <p>
                      Switch to {dark ? "light" : "dark"} mode or press{" "}
                      <kbd className="text-xs font-medium text-foreground">
                        'd'
                      </kbd>
                    </p>
                  </TooltipPopup>
                </TooltipPositioner>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <ScrollArea className="me-2 h-[calc(100%-4rem)] min-h-0 sm:ps-6 lg:ps-8">
        <ScrollAreaViewport className="focus-visible:ring-0">
          <ScrollAreaContent>
            <div className="flex flex-col gap-0.5">
              {docs.map((doc) => {
                if (!doc.items) {
                  return (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      className="flex h-8 w-full items-center rounded-md px-2 text-sm font-medium transition-all duration-150 ease-default outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
                    >
                      {doc.title}
                    </Link>
                  );
                }

                return (
                  <Collapsible key={doc.title}>
                    <CollapsibleTrigger
                      render={<Button variant="ghost" />}
                      className="group w-full justify-between"
                    >
                      {doc.title}
                      <ChevronDownIcon className="size-4 transition-transform duration-300 ease-default group-data-panel-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsiblePanel>
                      <div className="ms-2 me-0.5 pt-0.5">
                        {doc.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex h-8 w-full items-center rounded-md px-2 text-sm font-medium transition-all duration-150 ease-default outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </CollapsiblePanel>
                  </Collapsible>
                );
              })}
            </div>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </aside>
  );
}
