"use client";

import { useDirection } from "@base-ui/react";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";

import { mergeVariantClassName } from "@/registry/sector23/lib/merge-base-ui";

import { menubar } from "./menubar.style";

function Menubar({ className, ...props }: BaseMenubar.Props) {
  const direction = useDirection();

  return (
    <BaseMenubar
      data-slot="menubar"
      className={mergeVariantClassName(menubar, {}, className)}
      {...props}
      dir={direction}
    />
  );
}

export { Menubar };
