import { MenuIcon, ShoppingCartIcon, XIcon } from "lucide-react";

import { Button } from "@/app/components/button";
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
} from "@/app/components/drawer";

export default function DrawerPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button />} aria-label="Open drawer">
          <MenuIcon />
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerViewport>
            <DrawerPopup className="w-lg">
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <ShoppingCartIcon />
                    Shopping cart
                  </DrawerTitle>
                  <DrawerDescription>View your shopping cart and checkout.</DrawerDescription>
                  <DrawerClose render={<Button variant="ghost" />}>
                    <XIcon />
                  </DrawerClose>
                </DrawerHeader>
                <div className="min-h-0 flex-1 overflow-y-auto bg-muted" />
                <DrawerFooter>
                  <DrawerClose className="min-h-9 text-base">Close</DrawerClose>
                  <Button size="lg">Checkout</Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerPopup>
          </DrawerViewport>
        </DrawerPortal>
      </Drawer>
    </div>
  );
}
