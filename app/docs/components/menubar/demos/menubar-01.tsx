import {
  ChevronRightIcon,
  DownloadIcon,
  FileCodeIcon,
  FileIcon,
  FileJsonIcon,
  FilePlusIcon,
  FolderIcon,
  FolderPlusIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";

import { Button } from "@/app/components/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "@/app/components/menu";
import { Menubar } from "@/app/components/menubar";

export default function Menubar01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Menubar>
        <Menu>
          <MenuTrigger render={<Button variant="ghost" />}>File</MenuTrigger>
          <MenuPortal>
            <MenuPositioner>
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
                <MenuSubmenu>
                  <MenuSubmenuTrigger>
                    <DownloadIcon /> Export <ChevronRightIcon />
                  </MenuSubmenuTrigger>
                  <MenuPortal>
                    <MenuPositioner sideOffset={-6} alignOffset={-6}>
                      <MenuPopup>
                        <MenuItem>
                          <FileJsonIcon />
                          Export as JSON
                        </MenuItem>
                        <MenuItem>
                          <FileCodeIcon />
                          Export as CSV
                        </MenuItem>
                      </MenuPopup>
                    </MenuPositioner>
                  </MenuPortal>
                </MenuSubmenu>
                <MenuSeparator />
                <MenuItem className="text-destructive data-highlighted:text-destructive">
                  Exit application
                </MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
        <Menu>
          <MenuTrigger render={<Button variant="ghost" />}>Edit</MenuTrigger>
          <MenuPortal>
            <MenuPositioner>
              <MenuPopup>
                <MenuItem>
                  Cut <kbd>Ctrl + X</kbd>
                </MenuItem>
                <MenuItem>
                  Copy <kbd>Ctrl + C</kbd>
                </MenuItem>
                <MenuItem>
                  Paste <kbd>Ctrl + V</kbd>
                </MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
        <Menu>
          <MenuTrigger render={<Button variant="ghost" />}>View</MenuTrigger>
          <MenuPortal>
            <MenuPositioner>
              <MenuPopup>
                <MenuItem>
                  <ZoomInIcon /> Zoom in
                </MenuItem>
                <MenuItem>
                  <ZoomOutIcon /> Zoom out
                </MenuItem>
                <MenuSeparator />
                <MenuItem> Reset zoom</MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
        <Menu>
          <MenuTrigger render={<Button variant="ghost" />} disabled>
            Help
          </MenuTrigger>
        </Menu>
      </Menubar>
    </div>
  );
}
