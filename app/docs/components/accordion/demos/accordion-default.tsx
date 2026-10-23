import { ChevronDownIcon } from "lucide-react";

import {
  Accordion,
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
            How do I change the delivery address?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Open the order and choose <b>Change address</b> before it ships. After
          that, contact the carrier with the tracking number.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            Can I return an item after I removed the tags, or does it have to
            stay unused in the original packaging?
            <ChevronDownIcon />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Unworn items can be returned within 30 days, even if the tags are off.
          Worn or washed items are not eligible.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
