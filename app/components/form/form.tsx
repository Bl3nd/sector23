"use client";

import { useDirection } from "@base-ui/react";
import { Form as BaseForm } from "@base-ui/react/form";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import { form } from "./form.style";

function Form({ className, ...props }: BaseForm.Props) {
  const direction = useDirection();

  return (
    <BaseForm
      data-slot="form"
      className={mergeVariantClassName(form, {}, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Form };
