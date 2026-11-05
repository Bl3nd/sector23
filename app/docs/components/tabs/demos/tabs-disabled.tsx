import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@/registry/sector23/ui/tabs";

export function TabsDisabled() {
  return (
    <Tabs defaultValue="inbox" className="w-full max-w-md">
      <TabsList>
        <TabsTab value="inbox">Inbox</TabsTab>
        <TabsTab value="archive" disabled>
          Archive
        </TabsTab>
        <TabsTab value="sent">Sent</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsContent>
        <TabsPanel value="inbox" className="text-sm text-foreground">
          <p>Inbox</p>
        </TabsPanel>
        <TabsPanel value="archive" className="text-sm text-foreground">
          <p>Archive</p>
        </TabsPanel>
        <TabsPanel value="sent" className="text-sm text-foreground">
          <p>Sent</p>
        </TabsPanel>
      </TabsContent>
    </Tabs>
  );
}
