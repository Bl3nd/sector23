import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTab,
} from "@/registry/sector23/ui/tabs";

export function TabsSize() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Tabs size="sm" defaultValue="day">
        <TabsList aria-label="Small">
          <TabsTab value="day">Day</TabsTab>
          <TabsTab value="week">Week</TabsTab>
          <TabsTab value="month">Month</TabsTab>
          <TabsIndicator />
        </TabsList>
      </Tabs>
      <Tabs size="md" defaultValue="day">
        <TabsList aria-label="Medium (default)">
          <TabsTab value="day">Day</TabsTab>
          <TabsTab value="week">Week</TabsTab>
          <TabsTab value="month">Month</TabsTab>
          <TabsIndicator />
        </TabsList>
      </Tabs>
      <Tabs size="lg" defaultValue="day">
        <TabsList aria-label="Large">
          <TabsTab value="day">Day</TabsTab>
          <TabsTab value="week">Week</TabsTab>
          <TabsTab value="month">Month</TabsTab>
          <TabsIndicator />
        </TabsList>
      </Tabs>
    </div>
  );
}
