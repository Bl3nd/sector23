import {
  ChevronDownIcon,
  FileIcon,
  FilePlusIcon,
  FolderIcon,
  FolderPlusIcon,
} from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/sector23/ui/menu";

export default function Menu01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Menu>
        <MenuTrigger render={<Button variant="ghost" />}>
          File <ChevronDownIcon />
        </MenuTrigger>
        <MenuPortal>
          <MenuPositioner align="start">
            <MenuPopup>
              <MenuItem>
                <FilePlusIcon /> New file <kbd>Ctrl + N</kbd>
              </MenuItem>
              <MenuItem>
                <FolderPlusIcon /> New folder <kbd>Ctrl + Shift + N</kbd>
              </MenuItem>
              <MenuSeparator />
              <MenuItem>
                <FileIcon /> Open file... <kbd>Ctrl + O</kbd>
              </MenuItem>
              <MenuItem>
                <FolderIcon /> Open folder... <kbd>Ctrl + M</kbd>
              </MenuItem>
              <MenuSeparator />
              <MenuItem className="text-destructive data-highlighted:text-destructive">
                Exit application
              </MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </Menu>
    </div>
  );
}
