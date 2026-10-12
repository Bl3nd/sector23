"use client";

import { useDirection } from "@base-ui/react";
import { Field as BaseField } from "@base-ui/react/field";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { field } from "./field.style";

function Field({ className, ...props }: BaseField.Root.Props) {
  const direction = useDirection();

  return (
    <BaseField.Root
      data-slot="field"
      className={mergeSlotClassName(field().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function FieldLabel({ className, ...props }: BaseField.Label.Props) {
  return (
    <BaseField.Label
      data-slot="field-label"
      className={mergeSlotClassName(field().label, className)}
      {...props}
    />
  );
}

function FieldControl({ className, ...props }: BaseField.Control.Props) {
  return (
    <BaseField.Control
      data-slot="field-control"
      className={mergeSlotClassName(field().control, className)}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: BaseField.Description.Props) {
  return (
    <BaseField.Description
      data-slot="field-description"
      className={mergeSlotClassName(field().description, className)}
      {...props}
    />
  );
}

function FieldItem({ className, ...props }: BaseField.Item.Props) {
  return (
    <BaseField.Item
      data-slot="field-item"
      className={mergeSlotClassName(field().item, className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: BaseField.Error.Props) {
  return (
    <BaseField.Error
      data-slot="field-error"
      className={mergeSlotClassName(field().error, className)}
      {...props}
    />
  );
}

function FieldValidity(props: BaseField.Validity.Props) {
  return <BaseField.Validity {...props} />;
}

export { Field, FieldLabel, FieldControl, FieldDescription, FieldItem, FieldError, FieldValidity };
