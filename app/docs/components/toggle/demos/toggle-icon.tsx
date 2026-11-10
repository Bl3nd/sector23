import { BoldIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";

export function ToggleIcon() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle>
        <BoldIcon data-side="inline-start" /> Bold
      </Toggle>
      <Toggle>
        Bold <BoldIcon data-side="inline-end" />
      </Toggle>
    </div>
  );
}
