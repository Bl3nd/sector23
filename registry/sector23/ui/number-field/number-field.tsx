"use client";

import { useDirection } from "@base-ui/react";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { MinusIcon, MoveHorizontalIcon, PlusIcon } from "lucide-react";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import {
  numberField,
  type NumberFieldVariantProps,
} from "./number-field.style";

type NumberFieldContext = NumberFieldVariantProps;

const NumberFieldContext = createContext<NumberFieldContext>({
  size: "md",
});

function useNumberField() {
  return useContext(NumberFieldContext);
}

function NumberField({
  size,
  className,
  children,
  ...props
}: BaseNumberField.Root.Props & NumberFieldVariantProps) {
  const direction = useDirection();

  return (
    <NumberFieldContext.Provider value={{ size }}>
      <BaseNumberField.Root
        data-slot="number-field"
        className={mergeSlotClassName(numberField().root, className)}
        {...props}
        dir={direction}
      >
        {children}
      </BaseNumberField.Root>
    </NumberFieldContext.Provider>
  );
}

function NumberFieldScrubArea({
  className,
  ...props
}: BaseNumberField.ScrubArea.Props) {
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

function NumberFieldGroup({
  className,
  ...props
}: BaseNumberField.Group.Props) {
  const { size } = useNumberField();

  return (
    <BaseNumberField.Group
      data-slot="number-field-group"
      className={mergeSlotClassName(numberField({ size }).group, className)}
      {...props}
    />
  );
}

function NumberFieldDecrement({
  className,
  children,
  ...props
}: BaseNumberField.Decrement.Props) {
  const { size } = useNumberField();

  return (
    <BaseNumberField.Decrement
      data-slot="number-field-decrement"
      className={mergeSlotClassName(numberField({ size }).decrement, className)}
      {...props}
    >
      {children ?? <MinusIcon />}
    </BaseNumberField.Decrement>
  );
}

function NumberFieldInput({
  className,
  ...props
}: BaseNumberField.Input.Props) {
  const { size } = useNumberField();

  return (
    <BaseNumberField.Input
      data-slot="number-field-input"
      className={mergeSlotClassName(numberField({ size }).input, className)}
      {...props}
    />
  );
}

function NumberFieldIncrement({
  className,
  children,
  ...props
}: BaseNumberField.Increment.Props) {
  const { size } = useNumberField();

  return (
    <BaseNumberField.Increment
      data-slot="number-field-increment"
      className={mergeSlotClassName(numberField({ size }).increment, className)}
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
