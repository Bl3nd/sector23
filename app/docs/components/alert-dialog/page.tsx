import { AlertCircleIcon, DownloadIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/alert-dialog";
import { Button } from "@/app/components/button";

export default function AlertDialogPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" />}>
          Delete project
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogHeader>
              <div className="flex size-10 items-center justify-center rounded-full bg-destructive/5">
                <AlertCircleIcon className="size-5 shrink-0 text-destructive" />
              </div>
              <AlertDialogTitle>Delete "Atlas launch"?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the project, including 24 tasks and shared files. This
                action can&apos;t be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="px-4">
              <div className="flex gap-3 rounded-lg border border-border bg-muted p-4">
                <DownloadIcon className="size-5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Need a record?</p>
                  <p className="text-sm text-muted-foreground">
                    Download a project export before continuing.
                  </p>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogClose>Cancel</AlertDialogClose>
              <AlertDialogClose render={<Button variant="destructive" />}>
                Delete project
              </AlertDialogClose>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialog>
    </div>
  );
}
