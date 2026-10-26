import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuTrigger,
} from "@/registry/sector23/ui/menu";

export function ButtonPopupTrigger() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        Options <ChevronDownIcon />
      </MenuTrigger>
      <MenuPortal>
        <MenuPositioner align="start">
          <MenuPopup>
            <MenuItem>Rename</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <MenuItem>Archive</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  );
}
