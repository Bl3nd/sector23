"use client";

import { useDirection } from "@base-ui/react";
import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { toolbar } from "./toolbar.style";

function Toolbar({ className, ...props }: BaseToolbar.Root.Props) {
  const direction = useDirection();

  return (
    <BaseToolbar.Root
      data-slot="toolbar"
      className={mergeSlotClassName(toolbar().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function ToolbarButton({ className, ...props }: BaseToolbar.Button.Props) {
  return (
    <BaseToolbar.Button
      data-slot="toolbar-button"
      className={mergeSlotClassName(toolbar().button, className)}
      {...props}
    />
  );
}

function ToolbarLink({ className, ...props }: BaseToolbar.Link.Props) {
  return (
    <BaseToolbar.Link
      data-slot="toolbar-link"
      className={mergeSlotClassName(toolbar().link, className)}
      {...props}
    />
  );
}

function ToolbarSeparator({
  className,
  ...props
}: BaseToolbar.Separator.Props) {
  return (
    <BaseToolbar.Separator
      data-slot="toolbar-separator"
      className={mergeSlotClassName(toolbar().separator, className)}
      {...props}
    />
  );
}

function ToolbarGroup({ className, ...props }: BaseToolbar.Group.Props) {
  return (
    <BaseToolbar.Group
      data-slot="toolbar-group"
      className={mergeSlotClassName(toolbar().group, className)}
      {...props}
    />
  );
}

function ToolbarInput({ className, ...props }: BaseToolbar.Input.Props) {
  return (
    <BaseToolbar.Input
      data-slot="toolbar-input"
      className={mergeSlotClassName(toolbar().input, className)}
      {...props}
    />
  );
}

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarGroup,
  ToolbarInput,
};
