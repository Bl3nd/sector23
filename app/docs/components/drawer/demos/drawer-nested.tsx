import { XIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "@/registry/sector23/ui/drawer";

export function DrawerNested() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>Account settings</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport>
          <DrawerPopup>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Account</DrawerTitle>
                <DrawerDescription>
                  Open security settings to stack a second drawer.
                </DrawerDescription>
                <DrawerClose render={<Button variant="ghost" />}>
                  <XIcon />
                </DrawerClose>
              </DrawerHeader>
              <DrawerFooter>
                <Drawer>
                  <DrawerTrigger render={<Button variant="outline" />}>
                    Security settings
                  </DrawerTrigger>
                  <DrawerPortal>
                    <DrawerBackdrop forceRender />
                    <DrawerViewport>
                      <DrawerPopup>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Security</DrawerTitle>
                            <DrawerDescription>
                              Review sign-in activity.
                            </DrawerDescription>
                            <DrawerClose render={<Button variant="ghost" />}>
                              <XIcon />
                            </DrawerClose>
                          </DrawerHeader>
                          <DrawerFooter>
                            <DrawerClose render={<Button variant="outline" />}>
                              Done
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </DrawerPopup>
                    </DrawerViewport>
                  </DrawerPortal>
                </Drawer>
                <DrawerClose render={<Button variant="outline" />}>
                  Close
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </Drawer>
  );
}
