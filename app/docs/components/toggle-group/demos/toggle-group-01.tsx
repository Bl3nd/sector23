import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";
import { ToggleGroup } from "@/registry/sector23/ui/toggle-group";

export default function ToggleGroup01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <ToggleGroup aria-label="Text alignment" defaultValue={["left"]}>
        <Toggle value="left">
          <AlignLeftIcon />
        </Toggle>
        <Toggle value="center">
          <AlignCenterIcon />
        </Toggle>
        <Toggle value="right">
          <AlignRightIcon />
        </Toggle>
      </ToggleGroup>
    </div>
  );
}
