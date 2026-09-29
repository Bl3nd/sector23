import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";

function NavigationMenu({ className, ...props }: BaseNavigationMenu.Root.Props) {
  return <BaseNavigationMenu.Root data-slot="navigation-menu" className={className} {...props} />;
}

function NavigationMenuList({ className, ...props }: BaseNavigationMenu.List.Props) {
  return (
    <BaseNavigationMenu.List data-slot="navigation-menu-list" className={className} {...props} />
  );
}

function NavigationMenuItem({ className, ...props }: BaseNavigationMenu.Item.Props) {
  return (
    <BaseNavigationMenu.Item data-slot="navigation-menu-item" className={className} {...props} />
  );
}

function NavigationMenuTrigger({ className, ...props }: BaseNavigationMenu.Trigger.Props) {
  return (
    <BaseNavigationMenu.Trigger
      data-slot="navigation-menu-trigger"
      className={className}
      {...props}
    />
  );
}

function NavigationMenuIcon({ className, ...props }: BaseNavigationMenu.Icon.Props) {
  return (
    <BaseNavigationMenu.Icon data-slot="navigation-menu-icon" className={className} {...props} />
  );
}

function NavigationMenuContent({ className, ...props }: BaseNavigationMenu.Content.Props) {
  return (
    <BaseNavigationMenu.Content
      data-slot="navigation-menu-content"
      className={className}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, ...props }: BaseNavigationMenu.Link.Props) {
  return (
    <BaseNavigationMenu.Link data-slot="navigation-menu-link" className={className} {...props} />
  );
}

function NavigationMenuPortal({ className, ...props }: BaseNavigationMenu.Portal.Props) {
  return (
    <BaseNavigationMenu.Portal
      data-slot="navigation-menu-portal"
      className={className}
      {...props}
    />
  );
}

function NavigationMenuBackdrop({ className, ...props }: BaseNavigationMenu.Backdrop.Props) {
  return (
    <BaseNavigationMenu.Backdrop
      data-slot="navigation-menu-backdrop"
      className={className}
      {...props}
    />
  );
}

function NavigationMenuPositioner({ className, ...props }: BaseNavigationMenu.Positioner.Props) {
  return (
    <BaseNavigationMenu.Positioner
      data-slot="navigation-menu-positioner"
      className={className}
      {...props}
    />
  );
}

function NavigationMenuPopup({ className, ...props }: BaseNavigationMenu.Popup.Props) {
  return (
    <BaseNavigationMenu.Popup data-slot="navigation-menu-popup" className={className} {...props} />
  );
}

function NavigationMenuArrow({ className, ...props }: BaseNavigationMenu.Arrow.Props) {
  return (
    <BaseNavigationMenu.Arrow data-slot="navigation-menu-arrow" className={className} {...props} />
  );
}

function NavigationMenuViewport({ className, ...props }: BaseNavigationMenu.Viewport.Props) {
  return (
    <BaseNavigationMenu.Viewport
      data-slot="navigation-menu-viewport"
      className={className}
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
