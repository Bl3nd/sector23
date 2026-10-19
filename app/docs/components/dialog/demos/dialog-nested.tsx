"use client";

import { useState } from "react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
} from "@/registry/sector23/ui/dialog";

export function DialogNested() {
  const [parentOpen, setParentOpen] = useState(false);

  return (
    <Dialog open={parentOpen} onOpenChange={setParentOpen}>
      <DialogTrigger
        render={<Button variant="outline" />}
        onClick={() => setParentOpen(true)}
      >
        Manage subscription
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogViewport>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Subscription</DialogTitle>
              <DialogDescription>
                You are on the Team plan at $24 per month. It renews on November
                19, 2026.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Done
              </DialogClose>
              <Dialog>
                <DialogTrigger render={<Button variant="destructive" />}>
                  Cancel plan
                </DialogTrigger>
                <DialogPortal>
                  <DialogViewport>
                    <DialogPopup>
                      <DialogHeader>
                        <DialogTitle>Cancel your plan?</DialogTitle>
                        <DialogDescription>
                          Your workspace moves to the Free plan on November 19,
                          2026. Projects over the Free limit become read-only.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose render={<Button variant="outline" />}>
                          Keep plan
                        </DialogClose>
                        <DialogClose
                          render={<Button variant="destructive" />}
                          onClick={() => setParentOpen(false)}
                        >
                          Confirm cancellation
                        </DialogClose>
                      </DialogFooter>
                    </DialogPopup>
                  </DialogViewport>
                </DialogPortal>
              </Dialog>
            </DialogFooter>
          </DialogPopup>
        </DialogViewport>
      </DialogPortal>
    </Dialog>
  );
}
