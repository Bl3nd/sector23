import { ChevronDownIcon, PanelLeftClose } from "lucide-react";
import Link from "next/link";

import { Button } from "../../../registry/sector23/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "../../../registry/sector23/ui/collapsible";
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
} from "../../../registry/sector23/ui/drawer";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "../../../registry/sector23/ui/scroll-area";

const docs = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
      {
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
      },
      {
        title: "Autocomplete",
        href: "/docs/components/autocomplete",
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
      },
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Checkbox Group",
        href: "/docs/components/checkbox-group",
      },
      {
        title: "Collapsible",
        href: "/docs/components/collapsible",
      },
      {
        title: "Combobox",
        href: "/docs/components/combobox",
      },
      {
        title: "Context Menu",
        href: "/docs/components/context-menu",
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        title: "Drawer",
        href: "/docs/components/drawer",
      },
      {
        title: "Field",
        href: "/docs/components/field",
      },
      {
        title: "Fieldset",
        href: "/docs/components/fieldset",
      },
      {
        title: "Form",
        href: "/docs/components/form",
      },
      {
        title: "Input",
        href: "/docs/components/input",
      },
      {
        title: "Label",
        href: "/docs/components/label",
      },
      {
        title: "Menu",
        href: "/docs/components/menu",
      },
      {
        title: "Menubar",
        href: "/docs/components/menubar",
      },
      {
        title: "Meter",
        href: "/docs/components/meter",
      },
      {
        title: "Navigation Menu",
        href: "/docs/components/navigation-menu",
      },
      {
        title: "Number Field",
        href: "/docs/components/number-field",
      },
      {
        title: "OTP Field",
        href: "/docs/components/otp-field",
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
      },
      {
        title: "Preview Card",
        href: "/docs/components/preview-card",
      },
      {
        title: "Progress",
        href: "/docs/components/progress",
      },
      {
        title: "Radio Group",
        href: "/docs/components/radio-group",
      },
      {
        title: "Scroll Area",
        href: "/docs/components/scroll-area",
      },
      {
        title: "Select",
        href: "/docs/components/select",
      },
      {
        title: "Separator",
        href: "/docs/components/separator",
      },
      {
        title: "Slider",
        href: "/docs/components/slider",
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
      },
      {
        title: "Toast",
        href: "/docs/components/toast",
      },
      {
        title: "Toggle",
        href: "/docs/components/toggle",
      },
      {
        title: "Toggle Group",
        href: "/docs/components/toggle-group",
      },
      {
        title: "Toolbar",
        href: "/docs/components/toolbar",
      },
      {
        title: "Tooltip",
        href: "/docs/components/tooltip",
      },
    ],
  },
];

export default function DocsSidebar({ handle }: { handle: DrawerHandle }) {
  return (
    <>
      <DocsDrawer handle={handle} />
      <DocsDesktopSidebar />
    </>
  );
}

function DocsDesktopSidebar() {
  return (
    <div className="hidden contain-size sm:block sm:w-64 sm:shrink-0">
      <div className="sticky top-(--header-height) flex h-[min(100%,calc(100dvh-var(--header-height)))] flex-col">
        <div className="shrink-0 py-4">
          <h1 className="text-base leading-none font-semibold text-foreground">Sector23 UI Docs</h1>
        </div>
        <ScrollArea className="min-h-0 flex-1">
          <ScrollAreaViewport>
            <ScrollAreaContent>
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
      </div>
    </div>
  );
}

function DocsDrawer({ handle }: { handle: DrawerHandle }) {
  return (
    <Drawer handle={handle} swipeDirection="left">
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport>
          <DrawerPopup className="p-4">
            <DrawerContent className="gap-2">
              <DrawerHeader className="pb-3">
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
