"use client";

import { Button as BaseButton } from "@base-ui/react/button";

import type { ButtonVariantProps } from "./button.style";

import { button } from "./button.style";

function Button({ size, variant, className, ...props }: BaseButton.Props & ButtonVariantProps) {
  return (
    <BaseButton
      data-slot="button"
      className={(state) =>
        button({
          className: typeof className === "function" ? className(state) : className,
          size,
          variant,
        })
      }
      {...props}
    />
  );
}

export { Button };
