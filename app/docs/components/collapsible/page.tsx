import { ChevronDownIcon } from "lucide-react";

import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/app/components/collapsible";

export default function CollapsiblePage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Collapsible className="w-full max-w-sm">
        <CollapsibleTrigger className="group flex w-full items-center justify-between gap-2 font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
          What's included in Sector23?
          <ChevronDownIcon className="size-4 transition-transform duration-300 ease-default group-data-panel-open:rotate-180" />
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
