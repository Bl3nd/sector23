import { Form as BaseForm } from "@base-ui/react/form";

function Form({ className, ...props }: BaseForm.Props) {
  return <BaseForm data-slot="form" className={className} {...props} />;
}

export { Form };
