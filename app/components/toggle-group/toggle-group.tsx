import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

function ToggleGroup({ className, ...props }: BaseToggleGroup.Props) {
  return <BaseToggleGroup data-slot="toggle-group" className={className} {...props} />;
}

export { ToggleGroup };
