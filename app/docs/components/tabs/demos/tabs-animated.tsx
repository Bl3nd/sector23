import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@/registry/sector23/ui/tabs";

export function TabsAnimated() {
  return (
    <Tabs animated defaultValue="draft" className="w-full max-w-md">
      <TabsList>
        <TabsTab value="draft">Draft</TabsTab>
        <TabsTab value="review">Review</TabsTab>
        <TabsTab value="published">Published</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsContent>
        <TabsPanel value="draft" className="text-sm text-foreground">
          <p>Draft</p>
        </TabsPanel>
        <TabsPanel value="review" className="text-sm text-foreground">
          <p>Review</p>
        </TabsPanel>
        <TabsPanel value="published" className="text-sm text-foreground">
          <p>Published</p>
        </TabsPanel>
      </TabsContent>
    </Tabs>
  );
}
