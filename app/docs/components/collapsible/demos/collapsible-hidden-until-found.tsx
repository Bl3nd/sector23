import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/sector23/ui/collapsible";

export function CollapsibleHiddenUntilFound() {
  return (
    <Collapsible className="w-full max-w-64">
      <CollapsibleTrigger render={<Button />}>
        Shipping details
        <ChevronDownIcon className="transition-transform duration-300 ease-default group-data-panel-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsiblePanel hiddenUntilFound>
        <p className="mt-2 text-sm text-muted-foreground">
          A courier picks up orders placed before 2pm on the same business day.
        </p>
      </CollapsiblePanel>
    </Collapsible>
  );
}
