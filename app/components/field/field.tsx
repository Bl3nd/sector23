import { Field as BaseField } from "@base-ui/react/field";

function Field({ className, ...props }: BaseField.Root.Props) {
  return <BaseField.Root data-slot="field" className={className} {...props} />;
}

function FieldLabel({ className, ...props }: BaseField.Label.Props) {
  return <BaseField.Label data-slot="field-label" className={className} {...props} />;
}

function FieldControl({ className, ...props }: BaseField.Control.Props) {
  return <BaseField.Control data-slot="field-control" className={className} {...props} />;
}

function FieldDescription({ className, ...props }: BaseField.Description.Props) {
  return <BaseField.Description data-slot="field-description" className={className} {...props} />;
}

function FieldItem({ className, ...props }: BaseField.Item.Props) {
  return <BaseField.Item data-slot="field-item" className={className} {...props} />;
}

function FieldError({ className, ...props }: BaseField.Error.Props) {
  return <BaseField.Error data-slot="field-error" className={className} {...props} />;
}

function FieldValidity(props: BaseField.Validity.Props) {
  return <BaseField.Validity {...props} />;
}

export { Field, FieldLabel, FieldControl, FieldDescription, FieldItem, FieldError, FieldValidity };
