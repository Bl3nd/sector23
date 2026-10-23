import { ChevronDownIcon } from "lucide-react";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/sector23/ui/accordion";

export function AccordionItemDisabled() {
  return (
    <Accordion className="max-w-sm">
      <AccordionItem disabled>
        <AccordionHeader>
          <AccordionTrigger>
            When will my order ship?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Orders placed before 2pm ship the same business day. Everything else
          goes out the next business day.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            How do I track a package?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Use the tracking link in your shipping email. It updates when the
          carrier scans the package.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            Where is my refund?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Refunds go back to the original payment method within five business
          days of the return arriving.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
