import { NumberField as BaseNumberField } from "@base-ui/react/number-field";

function NumberField({ className, ...props }: BaseNumberField.Root.Props) {
  return <BaseNumberField.Root data-slot="number-field" className={className} {...props} />;
}

function NumberFieldScrubArea({ className, ...props }: BaseNumberField.ScrubArea.Props) {
  return (
    <BaseNumberField.ScrubArea
      data-slot="number-field-scrub-area"
      className={className}
      {...props}
    />
  );
}

function NumberFieldScrubAreaCursor({
  className,
  ...props
}: BaseNumberField.ScrubAreaCursor.Props) {
  return (
    <BaseNumberField.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      className={className}
      {...props}
    />
  );
}

function NumberFieldGroup({ className, ...props }: BaseNumberField.Group.Props) {
  return <BaseNumberField.Group data-slot="number-field-group" className={className} {...props} />;
}

function NumberFieldDecrement({ className, ...props }: BaseNumberField.Decrement.Props) {
  return (
    <BaseNumberField.Decrement
      data-slot="number-field-decrement"
      className={className}
      {...props}
    />
  );
}

function NumberFieldInput({ className, ...props }: BaseNumberField.Input.Props) {
  return <BaseNumberField.Input data-slot="number-field-input" className={className} {...props} />;
}

function NumberFieldIncrement({ className, ...props }: BaseNumberField.Increment.Props) {
  return (
    <BaseNumberField.Increment
      data-slot="number-field-increment"
      className={className}
      {...props}
    />
  );
}

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
};
