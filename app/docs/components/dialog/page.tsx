import { Button } from "@/app/components/button";
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
} from "@/app/components/dialog";

export default function DialogPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Dialog>
        <DialogTrigger render={<Button variant="destructive" />}>Delete project</DialogTrigger>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>Delete project?</DialogTitle>
              <DialogDescription>
                This will permanently delete Acme Website and all of its files. This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
              <DialogClose render={<Button variant="destructive" />}>Delete project</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
