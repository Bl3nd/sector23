import { UserIcon } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@/registry/sector23/ui/tabs";

export function TabsDefault() {
  return (
    <Tabs className="w-full max-w-md">
      <TabsList>
        <TabsTab value="account">
          <UserIcon data-side="inline-start" /> Account
        </TabsTab>
        <TabsTab value="settings">Settings</TabsTab>
        <TabsTab value="billing">Billing</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsContent>
        <TabsPanel value="account" className="text-sm text-foreground">
          <p>Account</p>
        </TabsPanel>
        <TabsPanel value="settings" className="text-sm text-foreground">
          <p>Settings</p>
        </TabsPanel>
        <TabsPanel value="billing" className="text-sm text-foreground">
          <p>Billing</p>
        </TabsPanel>
      </TabsContent>
    </Tabs>
  );
}
