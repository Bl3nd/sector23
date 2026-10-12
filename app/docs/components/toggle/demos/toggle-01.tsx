import { BoldIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";

export default function Toggle01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Toggle aria-label="Bold">
        <BoldIcon />
      </Toggle>
    </div>
  );
}
