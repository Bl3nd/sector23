import { Separator as BaseSeparator } from "@base-ui/react/separator";

function Separator({ className, ...props }: BaseSeparator.Props) {
  return <BaseSeparator data-slot="separator" className={className} {...props} />;
}

export { Separator };
