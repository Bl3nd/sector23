import { ChevronDownIcon, PanelLeftClose } from "lucide-react";
import Link from "next/link";

import { Button } from "@/registry/sector23/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/sector23/ui/collapsible";
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerViewport,
  type DrawerHandle,
} from "@/registry/sector23/ui/drawer";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

import { docs } from "./docs-content";

export default function DocsSidebar({ handle }: { handle: DrawerHandle }) {
  return (
    <Drawer handle={handle} swipeDirection="left">
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport>
          <DrawerPopup className="p-4">
            <DrawerContent className="gap-2">
              <DrawerHeader className="pt-0.5 pb-4">
                <DrawerTitle>Sector23 UI Docs</DrawerTitle>
                <DrawerClose render={<Button variant="ghost-emphasized" />}>
                  <PanelLeftClose />
                </DrawerClose>
              </DrawerHeader>
              <ScrollArea className="min-h-0 flex-1">
                <ScrollAreaViewport>
                  <ScrollAreaContent className="p-0.5 pe-3">
                    <div className="flex flex-col">
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
            </DrawerContent>
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer>
  );
}
