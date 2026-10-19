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
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
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
                    <DialogPopup className="translate-x-[calc(-50%+2rem)] translate-y-[calc(-50%+2rem)]">
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
                        <DialogClose render={<Button variant="destructive" />}>
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
