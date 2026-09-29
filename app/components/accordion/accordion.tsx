import { Accordion as BaseAccordion } from "@base-ui/react/accordion";

function Accordion({ className, ...props }: BaseAccordion.Root.Props) {
  return <BaseAccordion.Root data-slot="accordion" className={className} {...props} />;
}

function AccordionItem({ className, ...props }: BaseAccordion.Item.Props) {
  return <BaseAccordion.Item data-slot="accordion-item" className={className} {...props} />;
}

function AccordionHeader({ className, ...props }: BaseAccordion.Header.Props) {
  return <BaseAccordion.Header data-slot="accordion-header" className={className} {...props} />;
}

function AccordionTrigger({ className, ...props }: BaseAccordion.Trigger.Props) {
  return <BaseAccordion.Trigger data-slot="accordion-trigger" className={className} {...props} />;
}

function AccordionPanel({ className, children, ...props }: BaseAccordion.Panel.Props) {
  return (
    <BaseAccordion.Panel data-slot="accordion-panel" className={className} {...props}>
      <div data-slot="accordion-panel-content">{children}</div>
    </BaseAccordion.Panel>
  );
}

export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionPanel };
