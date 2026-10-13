"use client";

import type { ComponentProps } from "react";

import { useDirection } from "@base-ui/react";

import { label } from "./label.style";

function Label({ className, ...props }: ComponentProps<"label">) {
  const direction = useDirection();

  return (
    <label
      data-slot="label"
      className={label({ className })}
      {...props}
      dir={direction}
    />
  );
}

export { Label };
