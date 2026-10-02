"use client";

import { Input as BaseInput } from "@base-ui/react/input";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import { input } from "./input.style";

function Input({ className, ...props }: BaseInput.Props) {
  return (
    <BaseInput
      data-slot="input"
      className={mergeVariantClassName(input, {}, className)}
      {...props}
    />
  );
}

export { Input };
