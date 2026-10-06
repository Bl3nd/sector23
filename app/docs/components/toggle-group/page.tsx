import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

import { Toggle } from "@/app/components/toggle";
import { ToggleGroup } from "@/app/components/toggle-group";

export default function ToggleGroupPage() {
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
