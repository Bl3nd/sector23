"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { tabs } from "./tabs.style";

function Tabs({ className, ...props }: BaseTabs.Root.Props) {
  const direction = useDirection();

  return (
    <BaseTabs.Root
      data-slot="tabs"
      className={mergeSlotClassName(tabs().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function TabsList({ className, ...props }: BaseTabs.List.Props) {
  return (
    <BaseTabs.List
      data-slot="tabs-list"
      className={mergeSlotClassName(tabs().list, className)}
      {...props}
    />
  );
}

function TabsTab({ className, ...props }: BaseTabs.Tab.Props) {
  return (
    <BaseTabs.Tab
      data-slot="tabs-tab"
      className={mergeSlotClassName(tabs().tab, className)}
      {...props}
    />
  );
}

function TabsIndicator({ className, ...props }: BaseTabs.Indicator.Props) {
  return (
    <BaseTabs.Indicator
      data-slot="tabs-indicator"
      className={mergeSlotClassName(tabs().indicator, className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const content = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">({ className: tabs().content({ className }) }, props),
      "data-slot": "tabs-content",
    },
    render,
  });

  return content;
}

function TabsPanel({ className, ...props }: BaseTabs.Panel.Props) {
  return (
    <BaseTabs.Panel
      data-slot="tabs-panel"
      className={mergeSlotClassName(tabs().panel, className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTab, TabsIndicator, TabsContent, TabsPanel };
