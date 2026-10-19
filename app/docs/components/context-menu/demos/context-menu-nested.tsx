import {
  ArrowBigUpIcon,
  ChevronRightIcon,
  CommandIcon,
  CopyIcon,
  CornerDownLeftIcon,
  DeleteIcon,
  FolderIcon,
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
  ContextMenuSubmenu,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
} from "@/registry/sector23/ui/context-menu";

export function ContextMenuNested() {
  return (
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
            <ContextMenuSubmenu>
              <ContextMenuSubmenuTrigger>
                <FolderInputIcon />
                Move to...
                <ChevronRightIcon />
              </ContextMenuSubmenuTrigger>
              <ContextMenuPortal>
                <ContextMenuPositioner sideOffset={-6}>
                  <ContextMenuPopup>
                    <ContextMenuItem>
                      <FolderIcon />
                      Documents
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <FolderIcon />
                      Downloads
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <FolderIcon />
                      Desktop
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <FolderIcon />
                      Pictures
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <FolderIcon />
                      Music
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <FolderIcon />
                      Videos
                    </ContextMenuItem>
                  </ContextMenuPopup>
                </ContextMenuPositioner>
              </ContextMenuPortal>
            </ContextMenuSubmenu>
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
  );
}
