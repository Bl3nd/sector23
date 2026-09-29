import { mergeProps, useRender } from "@base-ui/react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";

function Tabs({ className, ...props }: BaseTabs.Root.Props) {
  return <BaseTabs.Root data-slot="tabs" className={className} {...props} />;
}

function TabsList({ className, ...props }: BaseTabs.List.Props) {
  return <BaseTabs.List data-slot="tabs-list" className={className} {...props} />;
}

function TabsTab({ className, ...props }: BaseTabs.Tab.Props) {
  return <BaseTabs.Tab data-slot="tabs-tab" className={className} {...props} />;
}

function TabsIndicator({ className, ...props }: BaseTabs.Indicator.Props) {
  return <BaseTabs.Indicator data-slot="tabs-indicator" className={className} {...props} />;
}

function TabsContent({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const content = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "tabs-content" },
    render,
  });

  return content;
}

function TabsPanel({ className, ...props }: BaseTabs.Panel.Props) {
  return <BaseTabs.Panel data-slot="tabs-panel" className={className} {...props} />;
}

export { Tabs, TabsList, TabsTab, TabsIndicator, TabsContent, TabsPanel };
