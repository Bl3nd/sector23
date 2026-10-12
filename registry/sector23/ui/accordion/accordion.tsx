"use client";

import { useDirection } from "@base-ui/react";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { accordion } from "./accordion.style";

function Accordion({ className, ...props }: BaseAccordion.Root.Props) {
  const direction = useDirection();

  return (
    <BaseAccordion.Root
      data-slot="accordion"
      className={mergeSlotClassName(accordion().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function AccordionItem({ className, ...props }: BaseAccordion.Item.Props) {
  return (
    <BaseAccordion.Item
      data-slot="accordion-item"
      className={mergeSlotClassName(accordion().item, className)}
      {...props}
    />
  );
}

function AccordionHeader({ className, ...props }: BaseAccordion.Header.Props) {
  return (
    <BaseAccordion.Header
      data-slot="accordion-header"
      className={mergeSlotClassName(accordion().header, className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, ...props }: BaseAccordion.Trigger.Props) {
  return (
    <BaseAccordion.Trigger
      data-slot="accordion-trigger"
      className={mergeSlotClassName(accordion().trigger, className)}
      {...props}
    />
  );
}

function AccordionPanel({
  className,
  contentClassName,
  children,
  ...props
}: BaseAccordion.Panel.Props & { contentClassName?: string }) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-panel"
      className={mergeSlotClassName(accordion().panel, className)}
      {...props}
    >
      <div
        data-slot="accordion-panel-content"
        className={accordion().panelContent({ className: contentClassName })}
      >
        {children}
      </div>
    </BaseAccordion.Panel>
  );
}

export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionPanel };
