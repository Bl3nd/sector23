import { ChevronDownIcon } from "lucide-react";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/sector23/ui/accordion";

export function AccordionRootDisabled() {
  return (
    <Accordion
      className="max-w-sm"
      disabled
      defaultValue={["item-1", "item-2", "item-3"]}
    >
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>
            When does the warehouse close?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Orders placed before 2pm ship the same business day. Later orders go
          out the next business day.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>
            Can I edit an address?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Yes, until the carrier picks up the package. After that, contact them
          with the tracking number.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader>
          <AccordionTrigger>
            How long do refunds take?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Refunds return to the original payment method within five business
          days of the return arriving.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
