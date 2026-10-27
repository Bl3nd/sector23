import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/sector23/ui/collapsible";

export function CollapsibleDefault() {
  return (
    <Collapsible className="w-full max-w-32">
      <CollapsibleTrigger render={<Button />}>
        Statuses
        <ChevronDownIcon className="transition-transform duration-300 ease-default group-data-panel-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div className="mt-2 text-sm text-muted-foreground">
          <p>In Development</p>
          <p>In Review</p>
          <p>In QA</p>
          <p>In Production</p>
          <p>In Maintenance</p>
          <p>In Deprecated</p>
          <p>In Archived</p>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
}
