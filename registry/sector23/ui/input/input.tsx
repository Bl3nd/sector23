"use client";

import { useDirection } from "@base-ui/react";
import { Input as BaseInput } from "@base-ui/react/input";

import { mergeVariantClassName } from "@/registry/sector23/lib/merge-base-ui";

import { input, type InputVariantProps } from "./input.style";

function Input({
  className,
  size,
  ...props
}: Omit<BaseInput.Props, "size"> & InputVariantProps) {
  const direction = useDirection();

  return (
    <BaseInput
      data-slot="input"
      className={mergeVariantClassName(input, { size }, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Input };
