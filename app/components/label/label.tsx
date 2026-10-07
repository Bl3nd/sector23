"use client";

import type { ComponentProps } from "react";

import { label } from "./label.style";

function Label({ className, ...props }: ComponentProps<"label">) {
  return <label data-slot="label" className={label({ className })} {...props} />;
}

export { Label };
