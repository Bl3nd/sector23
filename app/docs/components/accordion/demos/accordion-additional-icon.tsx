import { InfoIcon, PlusIcon } from "lucide-react";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/sector23/ui/accordion";

export function AccordionAdditionalIcon() {
  return (
    <Accordion className="max-w-sm **:data-[slot='accordion-panel-content']:ms-6">
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>
            <span>
              <InfoIcon />
            </span>
            When will my order ship?
            <PlusIcon className="group-data-panel-open:rotate-45" />
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
            <span>
              <InfoIcon />
            </span>
            How do I change the delivery address?
            <PlusIcon className="group-data-panel-open:rotate-45" />
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
            <span>
              <InfoIcon />
            </span>
            Can I return an item after I removed the tags, or does it have to
            stay unused in the original packaging?
            <PlusIcon className="group-data-panel-open:rotate-45" />
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
