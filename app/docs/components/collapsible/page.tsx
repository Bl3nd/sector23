import { ChevronDownIcon } from "lucide-react";

import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/app/components/collapsible";

export default function CollapsiblePage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Collapsible className="w-full max-w-sm">
        <CollapsibleTrigger>
          What's included in Sector23?
          <ChevronDownIcon className="group-data-panel-open:rotate-180" />
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <p className="pt-2 text-sm">
            Accessible, unstyled primitives from Base UI, paired with Tailwind CSS styles you can
            copy into your project and customize.
          </p>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  );
}
