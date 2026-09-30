"use client";

import { useDirection } from "@base-ui/react";
import { Button as BaseButton } from "@base-ui/react/button";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import type { ButtonVariantProps } from "./button.style";

import { button } from "./button.style";

function Button({ size, variant, className, ...props }: BaseButton.Props & ButtonVariantProps) {
  const direction = useDirection();

  return (
    <BaseButton
      data-slot="button"
      className={mergeVariantClassName(button, { size, variant }, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Button };
