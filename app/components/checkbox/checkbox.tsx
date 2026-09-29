import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";

function Checkbox({ className, ...props }: BaseCheckbox.Root.Props) {
  return <BaseCheckbox.Root data-slot="checkbox" className={className} {...props} />;
}

function CheckboxIndicator({ className, ...props }: BaseCheckbox.Indicator.Props) {
  return <BaseCheckbox.Indicator data-slot="checkbox-indicator" className={className} {...props} />;
}

export { Checkbox, CheckboxIndicator };
