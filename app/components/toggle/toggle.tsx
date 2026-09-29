import { Toggle as BaseToggle } from "@base-ui/react/toggle";

function Toggle({ className, ...props }: BaseToggle.Props) {
  return <BaseToggle data-slot="toggle" className={className} {...props} />;
}

export { Toggle };
