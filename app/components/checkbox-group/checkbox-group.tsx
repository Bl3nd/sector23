import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";

function CheckboxGroup({ className, ...props }: BaseCheckboxGroup.Props) {
  return <BaseCheckboxGroup data-slot="checkbox-group" className={className} {...props} />;
}

export { CheckboxGroup };
