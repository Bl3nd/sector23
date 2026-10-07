"use client";

import { Form as BaseForm } from "@base-ui/react/form";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import { form } from "./form.style";

function Form({ className, ...props }: BaseForm.Props) {
  return (
    <BaseForm data-slot="form" className={mergeVariantClassName(form, {}, className)} {...props} />
  );
}

export { Form };
