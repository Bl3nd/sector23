import { Input as BaseInput } from "@base-ui/react/input";

function Input({ className, ...props }: BaseInput.Props) {
  return <BaseInput data-slot="input" className={className} {...props} />;
}

export { Input };
