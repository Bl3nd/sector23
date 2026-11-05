"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { tabs, type TabsVariantProps } from "./tabs.style";

type TabsContext = TabsVariantProps;

const TabsContext = createContext<TabsContext>({
  size: "md",
  variant: "default",
  animated: false,
});

function useTabs() {
  return useContext(TabsContext);
}

function Tabs({
  size,
  variant,
  animated,
  className,
  children,
  ...props
}: BaseTabs.Root.Props & TabsVariantProps) {
  const direction = useDirection();

  return (
    <TabsContext.Provider value={{ size, variant, animated }}>
      <BaseTabs.Root
        data-slot="tabs"
        className={mergeSlotClassName(tabs().root, className)}
        {...props}
        dir={direction}
      >
        {children}
      </BaseTabs.Root>
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }: BaseTabs.List.Props) {
  const { variant } = useTabs();

  return (
    <BaseTabs.List
      data-slot="tabs-list"
      className={mergeSlotClassName(tabs({ variant }).list, className)}
      {...props}
    />
  );
}

function TabsTab({ className, ...props }: BaseTabs.Tab.Props) {
  const { size } = useTabs();

  return (
    <BaseTabs.Tab
      data-slot="tabs-tab"
      className={mergeSlotClassName(tabs({ size }).tab, className)}
      {...props}
    />
  );
}

function TabsIndicator({ className, ...props }: BaseTabs.Indicator.Props) {
  const { variant } = useTabs();

  return (
    <BaseTabs.Indicator
      data-slot="tabs-indicator"
      className={mergeSlotClassName(tabs({ variant }).indicator, className)}
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
  const { animated } = useTabs();

  return (
    <BaseTabs.Panel
      data-slot="tabs-panel"
      className={mergeSlotClassName(tabs({ animated }).panel, className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTab, TabsIndicator, TabsContent, TabsPanel };
