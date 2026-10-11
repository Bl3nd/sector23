"use client";

import { useDirection } from "@base-ui/react";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { MinusIcon, MoveHorizontalIcon, PlusIcon } from "lucide-react";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { numberField } from "./number-field.style";

function NumberField({ className, ...props }: BaseNumberField.Root.Props) {
  const direction = useDirection();

  return (
    <BaseNumberField.Root
      data-slot="number-field"
      className={mergeSlotClassName(numberField().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function NumberFieldScrubArea({ className, ...props }: BaseNumberField.ScrubArea.Props) {
  return (
    <BaseNumberField.ScrubArea
      data-slot="number-field-scrub-area"
      className={mergeSlotClassName(numberField().scrubArea, className)}
      {...props}
    />
  );
}

function NumberFieldScrubAreaCursor({
  className,
  children,
  ...props
}: BaseNumberField.ScrubAreaCursor.Props) {
  return (
    <BaseNumberField.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      className={mergeSlotClassName(numberField().scrubAreaCursor, className)}
      {...props}
    >
      {children ?? <MoveHorizontalIcon />}
    </BaseNumberField.ScrubAreaCursor>
  );
}

function NumberFieldGroup({ className, ...props }: BaseNumberField.Group.Props) {
  return (
    <BaseNumberField.Group
      data-slot="number-field-group"
      className={mergeSlotClassName(numberField().group, className)}
      {...props}
    />
  );
}

function NumberFieldDecrement({ className, children, ...props }: BaseNumberField.Decrement.Props) {
  return (
    <BaseNumberField.Decrement
      data-slot="number-field-decrement"
      className={mergeSlotClassName(numberField().decrement, className)}
      {...props}
    >
      {children ?? <MinusIcon />}
    </BaseNumberField.Decrement>
  );
}

function NumberFieldInput({ className, ...props }: BaseNumberField.Input.Props) {
  return (
    <BaseNumberField.Input
      data-slot="number-field-input"
      className={mergeSlotClassName(numberField().input, className)}
      {...props}
    />
  );
}

function NumberFieldIncrement({ className, children, ...props }: BaseNumberField.Increment.Props) {
  return (
    <BaseNumberField.Increment
      data-slot="number-field-increment"
      className={mergeSlotClassName(numberField().increment, className)}
      {...props}
    >
      {children ?? <PlusIcon />}
    </BaseNumberField.Increment>
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
