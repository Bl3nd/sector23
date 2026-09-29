import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";

function Collapsible({ className, ...props }: BaseCollapsible.Root.Props) {
  return <BaseCollapsible.Root data-slot="collapsible" className={className} {...props} />;
}

function CollapsibleTrigger({ className, ...props }: BaseCollapsible.Trigger.Props) {
  return (
    <BaseCollapsible.Trigger data-slot="collapsible-trigger" className={className} {...props} />
  );
}

function CollapsiblePanel({ className, ...props }: BaseCollapsible.Panel.Props) {
  return <BaseCollapsible.Panel data-slot="collapsible-panel" className={className} {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
