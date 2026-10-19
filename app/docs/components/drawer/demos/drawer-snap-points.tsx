"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

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

const snapPoints = [0.5, 1] as const;

export function DrawerSnapPoints() {
  const [snapPoint, setSnapPoint] = useState<number | string | null>(
    snapPoints[0],
  );

  return (
    <Drawer
      snapPoints={[...snapPoints]}
      snapPoint={snapPoint}
      onSnapPointChange={setSnapPoint}
    >
      <DrawerTrigger render={<Button />}>Open snap sheet</DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport>
          <DrawerPopup>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Snap points</DrawerTitle>
                <DrawerDescription>
                  Expand sheet moves this drawer to the full-height snap point.
                </DrawerDescription>
                <DrawerClose render={<Button variant="ghost" />}>
                  <XIcon />
                </DrawerClose>
              </DrawerHeader>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSnapPoint(snapPoints[1])}
                >
                  Expand sheet
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSnapPoint(snapPoints[0])}
                >
                  Peek sheet
                </Button>
              </div>
              <div className="min-h-[50vh]" />
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
