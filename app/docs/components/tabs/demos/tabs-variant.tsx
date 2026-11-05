import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@/registry/sector23/ui/tabs";

export function TabsVariant() {
  return (
    <Tabs variant="line" defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="activity">Activity</TabsTab>
        <TabsTab value="members">Members</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsContent>
        <TabsPanel value="overview" className="text-sm text-foreground">
          <p>Overview</p>
        </TabsPanel>
        <TabsPanel value="activity" className="text-sm text-foreground">
          <p>Activity</p>
        </TabsPanel>
        <TabsPanel value="members" className="text-sm text-foreground">
          <p>Members</p>
        </TabsPanel>
      </TabsContent>
    </Tabs>
  );
}
