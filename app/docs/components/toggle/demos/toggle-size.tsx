import { BoldIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";

export function ToggleSize() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle size="sm">Small</Toggle>
        <Toggle size="md">Medium (default)</Toggle>
        <Toggle size="lg">Large</Toggle>
      </div>
      <div className="flex items-center gap-4">
        <Toggle size="sm" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle size="md" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle size="lg" aria-label="Bold">
          <BoldIcon />
        </Toggle>
      </div>
    </div>
  );
}
