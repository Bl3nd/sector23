"use client";

import { useDirection } from "@base-ui/react";
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { contextMenu } from "./context-menu.style";

function ContextMenu(props: BaseContextMenu.Root.Props) {
  return <BaseContextMenu.Root {...props} />;
}

function ContextMenuTrigger({ className, ...props }: BaseContextMenu.Trigger.Props) {
  const direction = useDirection();

  return (
    <BaseContextMenu.Trigger
      data-slot="context-menu-trigger"
      className={mergeSlotClassName(contextMenu().trigger, className)}
      {...props}
      dir={direction}
    />
  );
}

function ContextMenuPortal({ className, ...props }: BaseContextMenu.Portal.Props) {
  const direction = useDirection();

  return (
    <BaseContextMenu.Portal
      data-slot="context-menu-portal"
      className={mergeSlotClassName(contextMenu().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function ContextMenuBackdrop({ className, ...props }: BaseContextMenu.Backdrop.Props) {
  return (
    <BaseContextMenu.Backdrop
      data-slot="context-menu-backdrop"
      className={mergeSlotClassName(contextMenu().backdrop, className)}
      {...props}
    />
  );
}

function ContextMenuPositioner({ className, ...props }: BaseContextMenu.Positioner.Props) {
  return (
    <BaseContextMenu.Positioner
      data-slot="context-menu-positioner"
      className={mergeSlotClassName(contextMenu().positioner, className)}
      {...props}
    />
  );
}

function ContextMenuPopup({ className, ...props }: BaseContextMenu.Popup.Props) {
  return (
    <BaseContextMenu.Popup
      data-slot="context-menu-popup"
      className={mergeSlotClassName(contextMenu().popup, className)}
      {...props}
    />
  );
}

function ContextMenuArrow({ className, ...props }: BaseContextMenu.Arrow.Props) {
  return (
    <BaseContextMenu.Arrow
      data-slot="context-menu-arrow"
      className={mergeSlotClassName(contextMenu().arrow, className)}
      {...props}
    />
  );
}

function ContextMenuItem({ className, ...props }: BaseContextMenu.Item.Props) {
  return (
    <BaseContextMenu.Item
      data-slot="context-menu-item"
      className={mergeSlotClassName(contextMenu().item, className)}
      {...props}
    />
  );
}

function ContextMenuLinkItem({ className, ...props }: BaseContextMenu.LinkItem.Props) {
  return (
    <BaseContextMenu.LinkItem
      data-slot="context-menu-link-item"
      className={mergeSlotClassName(contextMenu().linkItem, className)}
      {...props}
    />
  );
}

function ContextMenuSeparator({ className, ...props }: BaseContextMenu.Separator.Props) {
  return (
    <BaseContextMenu.Separator
      data-slot="context-menu-separator"
      className={mergeSlotClassName(contextMenu().separator, className)}
      {...props}
    />
  );
}

function ContextMenuSubmenu(props: BaseContextMenu.SubmenuRoot.Props) {
  return <BaseContextMenu.SubmenuRoot data-slot="context-menu-submenu-root" {...props} />;
}

function ContextMenuSubmenuTrigger({ className, ...props }: BaseContextMenu.SubmenuTrigger.Props) {
  return (
    <BaseContextMenu.SubmenuTrigger
      data-slot="context-menu-submenu-trigger"
      className={mergeSlotClassName(contextMenu().submenuTrigger, className)}
      {...props}
    />
  );
}

function ContextMenuGroup({ className, ...props }: BaseContextMenu.Group.Props) {
  return (
    <BaseContextMenu.Group
      data-slot="context-menu-group"
      className={mergeSlotClassName(contextMenu().group, className)}
      {...props}
    />
  );
}

function ContextMenuGroupLabel({ className, ...props }: BaseContextMenu.GroupLabel.Props) {
  return (
    <BaseContextMenu.GroupLabel
      data-slot="context-menu-group-label"
      className={mergeSlotClassName(contextMenu().groupLabel, className)}
      {...props}
    />
  );
}

function ContextMenuRadioGroup({ className, ...props }: BaseContextMenu.RadioGroup.Props) {
  return (
    <BaseContextMenu.RadioGroup
      data-slot="context-menu-radio-group"
      className={mergeSlotClassName(contextMenu().radioGroup, className)}
      {...props}
    />
  );
}

function ContextMenuRadioItem({ className, ...props }: BaseContextMenu.RadioItem.Props) {
  return (
    <BaseContextMenu.RadioItem
      data-slot="context-menu-radio-item"
      className={mergeSlotClassName(contextMenu().radioItem, className)}
      {...props}
    />
  );
}

function ContextMenuRadioItemIndicator({
  className,
  ...props
}: BaseContextMenu.RadioItemIndicator.Props) {
  return (
    <BaseContextMenu.RadioItemIndicator
      data-slot="context-menu-radio-item-indicator"
      className={mergeSlotClassName(contextMenu().radioItemIndicator, className)}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({ className, ...props }: BaseContextMenu.CheckboxItem.Props) {
  return (
    <BaseContextMenu.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={mergeSlotClassName(contextMenu().checkboxItem, className)}
      {...props}
    />
  );
}

function ContextMenuCheckboxItemIndicator({
  className,
  ...props
}: BaseContextMenu.CheckboxItemIndicator.Props) {
  return (
    <BaseContextMenu.CheckboxItemIndicator
      data-slot="context-menu-checkbox-item-indicator"
      className={mergeSlotClassName(contextMenu().checkboxItemIndicator, className)}
      {...props}
    />
  );
}
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuBackdrop,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuArrow,
  ContextMenuItem,
  ContextMenuLinkItem,
  ContextMenuSeparator,
  ContextMenuSubmenu,
  ContextMenuSubmenuTrigger,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
};
