import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

function Fieldset({ className, ...props }: BaseFieldset.Root.Props) {
  return <BaseFieldset.Root data-slot="fieldset" className={className} {...props} />;
}

function FieldsetLegend({ className, ...props }: BaseFieldset.Legend.Props) {
  return <BaseFieldset.Legend data-slot="fieldset-legend" className={className} {...props} />;
}

export { Fieldset, FieldsetLegend };
