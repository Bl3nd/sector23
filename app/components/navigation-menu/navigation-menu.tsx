"use client";

import { useDirection } from "@base-ui/react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { navigationMenu } from "./navigation-menu.style";

const POSITIONER_SIDE_OFFSET = 10;

function NavigationMenu({ className, ...props }: BaseNavigationMenu.Root.Props) {
  const direction = useDirection();

  return (
    <BaseNavigationMenu.Root
      data-slot="navigation-menu"
      className={mergeSlotClassName(navigationMenu().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function NavigationMenuList({ className, ...props }: BaseNavigationMenu.List.Props) {
  return (
    <BaseNavigationMenu.List
      data-slot="navigation-menu-list"
      className={mergeSlotClassName(navigationMenu().list, className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: BaseNavigationMenu.Item.Props) {
  return (
    <BaseNavigationMenu.Item
      data-slot="navigation-menu-item"
      className={mergeSlotClassName(navigationMenu().item, className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({ className, ...props }: BaseNavigationMenu.Trigger.Props) {
  return (
    <BaseNavigationMenu.Trigger
      data-slot="navigation-menu-trigger"
      className={mergeSlotClassName(navigationMenu().trigger, className)}
      {...props}
    />
  );
}

function NavigationMenuIcon({ className, children, ...props }: BaseNavigationMenu.Icon.Props) {
  return (
    <BaseNavigationMenu.Icon
      data-slot="navigation-menu-icon"
      className={mergeSlotClassName(navigationMenu().icon, className)}
      {...props}
    >
      {children ?? <ChevronDownIcon />}
    </BaseNavigationMenu.Icon>
  );
}

function NavigationMenuContent({ className, ...props }: BaseNavigationMenu.Content.Props) {
  return (
    <BaseNavigationMenu.Content
      data-slot="navigation-menu-content"
      className={mergeSlotClassName(navigationMenu().content, className)}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, ...props }: BaseNavigationMenu.Link.Props) {
  return (
    <BaseNavigationMenu.Link
      data-slot="navigation-menu-link"
      className={mergeSlotClassName(navigationMenu().link, className)}
      {...props}
    />
  );
}

function NavigationMenuPortal({ className, ...props }: BaseNavigationMenu.Portal.Props) {
  const direction = useDirection();

  return (
    <BaseNavigationMenu.Portal
      data-slot="navigation-menu-portal"
      className={mergeSlotClassName(navigationMenu().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function NavigationMenuBackdrop({ className, ...props }: BaseNavigationMenu.Backdrop.Props) {
  return (
    <BaseNavigationMenu.Backdrop
      data-slot="navigation-menu-backdrop"
      className={mergeSlotClassName(navigationMenu().backdrop, className)}
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BaseNavigationMenu.Positioner.Props) {
  return (
    <BaseNavigationMenu.Positioner
      data-slot="navigation-menu-positioner"
      className={mergeSlotClassName(navigationMenu().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function NavigationMenuPopup({ className, ...props }: BaseNavigationMenu.Popup.Props) {
  return (
    <BaseNavigationMenu.Popup
      data-slot="navigation-menu-popup"
      className={mergeSlotClassName(navigationMenu().popup, className)}
      {...props}
    />
  );
}

function NavigationMenuArrow({ className, ...props }: BaseNavigationMenu.Arrow.Props) {
  return (
    <BaseNavigationMenu.Arrow
      data-slot="navigation-menu-arrow"
      className={mergeSlotClassName(navigationMenu().arrow, className)}
      {...props}
    />
  );
}

function NavigationMenuViewport({ className, ...props }: BaseNavigationMenu.Viewport.Props) {
  return (
    <BaseNavigationMenu.Viewport
      data-slot="navigation-menu-viewport"
      className={mergeSlotClassName(navigationMenu().viewport, className)}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPortal,
  NavigationMenuBackdrop,
  NavigationMenuPositioner,
  NavigationMenuPopup,
  NavigationMenuArrow,
  NavigationMenuViewport,
};
