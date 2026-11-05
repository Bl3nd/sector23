import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@/registry/sector23/ui/tabs";

export function TabsVertical() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue="profile"
      className="h-40 w-full max-w-md"
    >
      <TabsList>
        <TabsTab value="profile">Profile</TabsTab>
        <TabsTab value="security">Security</TabsTab>
        <TabsTab value="notifications">Notifications</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsContent>
        <TabsPanel value="profile" className="text-sm text-foreground">
          <p>Profile</p>
        </TabsPanel>
        <TabsPanel value="security" className="text-sm text-foreground">
          <p>Security</p>
        </TabsPanel>
        <TabsPanel value="notifications" className="text-sm text-foreground">
          <p>Notifications</p>
        </TabsPanel>
      </TabsContent>
    </Tabs>
  );
}
