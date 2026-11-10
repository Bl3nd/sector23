import { BoldIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";

export function ToggleDefault() {
  return (
    <Toggle aria-label="Bold">
      <BoldIcon />
    </Toggle>
  );
}
