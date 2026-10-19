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

export function DrawerDefault() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>Open bottom sheet</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport>
          <DrawerPopup>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Bottom sheet</DrawerTitle>
                <DrawerDescription>
                  This sheet uses the default swipe direction, down.
                </DrawerDescription>
                <DrawerClose render={<Button variant="ghost" />}>
                  <XIcon />
                </DrawerClose>
              </DrawerHeader>
              <DrawerFooter>
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
