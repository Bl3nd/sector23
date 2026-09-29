import { Button as BaseButton } from "@base-ui/react/button";

function Button({ className, ...props }: BaseButton.Props) {
  return <BaseButton data-slot="button" className={className} {...props} />;
}

export { Button };
