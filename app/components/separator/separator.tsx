"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import { separator } from "./separator.style";

function Separator({ className, ...props }: BaseSeparator.Props) {
  return (
    <BaseSeparator
      data-slot="separator"
      className={mergeVariantClassName(separator, {}, className)}
      {...props}
    />
  );
}

export { Separator };
