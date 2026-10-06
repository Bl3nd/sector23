import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@/app/components/tabs";

export default function TabsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Tabs className="w-full max-w-md">
        <TabsList>
          <TabsTab value="account">Account</TabsTab>
          <TabsTab value="settings">Settings</TabsTab>
          <TabsTab value="billing">Billing</TabsTab>
          <TabsIndicator />
        </TabsList>
        <TabsContent>
          <TabsPanel value="account" className="justify-center text-center text-sm text-foreground">
            <p>Account</p>
          </TabsPanel>
          <TabsPanel
            value="settings"
            className="justify-center text-center text-sm text-foreground"
          >
            <p>Settings</p>
          </TabsPanel>
          <TabsPanel value="billing" className="justify-center text-center text-sm text-foreground">
            <p>Billing</p>
          </TabsPanel>
        </TabsContent>
      </Tabs>
    </div>
  );
}
