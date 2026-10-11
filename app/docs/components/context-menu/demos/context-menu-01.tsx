import {
  ArrowBigUpIcon,
  CommandIcon,
  CopyIcon,
  CornerDownLeftIcon,
  DeleteIcon,
  FolderInputIcon,
  PenIcon,
  Share2Icon,
  TrashIcon,
} from "lucide-react";

import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/app/components/context-menu";

export default function ContextMenu01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed border-border sm:w-md">
          Right click me
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup className="w-48 min-w-full">
              <ContextMenuItem>
                <PenIcon />
                Rename
                <kbd>
                  <CornerDownLeftIcon />
                </kbd>
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon />
                Duplicate
                <kbd>
                  <CommandIcon />D
                </kbd>
              </ContextMenuItem>
              <ContextMenuItem>
                <FolderInputIcon />
                Move to...
                <kbd>
                  <ArrowBigUpIcon />
                  <CommandIcon />M
                </kbd>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                <Share2Icon />
                Share
                <kbd>
                  <ArrowBigUpIcon />
                  <CommandIcon />S
                </kbd>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive data-highlighted:text-destructive">
                <TrashIcon />
                Delete
                <kbd>
                  <CommandIcon />
                  <DeleteIcon />
                </kbd>
              </ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenu>
    </div>
  );
}
