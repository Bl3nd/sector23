import { ChevronDownIcon } from "lucide-react";

import { Accordion } from "@/registry/sector23/ui/accordion";
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/sector23/ui/accordion";

export function AccordionDefault() {
  return (
    <Accordion className="max-w-sm">
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            What is Sector23?
            <ChevronDownIcon className="group-data-panel-open:rotate-180" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Sector23 is a React component library for building modern web
          applications. It is built with Tailwind CSS and React.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            How to use Sector23?
            <ChevronDownIcon className="group-data-panel-open:rotate-180" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          To use Sector23, you need to install components you need from the
          Shadcn Registry.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            Is Sector23 free to use? I need to test long text here to get the
            icon to align with the first line of text and centered within the
            line-height.
            <ChevronDownIcon className="group-data-panel-open:rotate-180" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Yes, Sector23 is free to use. It is open source and available on
          GitHub.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
