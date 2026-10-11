"use client";

import { useDirection } from "@base-ui/react";
import { Input as BaseInput } from "@base-ui/react/input";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import { input } from "./input.style";

function Input({ className, ...props }: BaseInput.Props) {
  const direction = useDirection();

  return (
    <BaseInput
      data-slot="input"
      className={mergeVariantClassName(input, {}, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Input };
