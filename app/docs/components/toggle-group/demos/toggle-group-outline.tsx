import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";
import { ToggleGroup } from "@/registry/sector23/ui/toggle-group";

export function ToggleGroupOutline() {
  return (
    <ToggleGroup aria-label="Text alignment" defaultValue={["left"]} outline>
      <Toggle value="left" aria-label="Align left">
        <AlignLeftIcon />
      </Toggle>
      <Toggle value="center" aria-label="Align center">
        <AlignCenterIcon />
      </Toggle>
      <Toggle value="right" aria-label="Align right">
        <AlignRightIcon />
      </Toggle>
    </ToggleGroup>
  );
}
