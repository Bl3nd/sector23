"use client";

import { Menubar as BaseMenubar } from "@base-ui/react/menubar";

import { mergeVariantClassName } from "@/app/lib/merge-base-ui";

import { menubar } from "./menubar.style";

function Menubar({ className, ...props }: BaseMenubar.Props) {
  return (
    <BaseMenubar
      data-slot="menubar"
      className={mergeVariantClassName(menubar, {}, className)}
      {...props}
    />
  );
}

export { Menubar };
