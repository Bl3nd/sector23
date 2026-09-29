import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";

function ContextMenu(props: BaseContextMenu.Root.Props) {
  return <BaseContextMenu.Root {...props} />;
}

function ContextMenuTrigger({ className, ...props }: BaseContextMenu.Trigger.Props) {
  return (
    <BaseContextMenu.Trigger data-slot="context-menu-trigger" className={className} {...props} />
  );
}

function ContextMenuPortal({ className, ...props }: BaseContextMenu.Portal.Props) {
  return (
    <BaseContextMenu.Portal data-slot="context-menu-portal" className={className} {...props} />
  );
}

function ContextMenuBackdrop({ className, ...props }: BaseContextMenu.Backdrop.Props) {
  return (
    <BaseContextMenu.Backdrop data-slot="context-menu-backdrop" className={className} {...props} />
  );
}

function ContextMenuPositioner({ className, ...props }: BaseContextMenu.Positioner.Props) {
  return (
    <BaseContextMenu.Positioner
      data-slot="context-menu-positioner"
      className={className}
      {...props}
    />
  );
}

function ContextMenuPopup({ className, ...props }: BaseContextMenu.Popup.Props) {
  return <BaseContextMenu.Popup data-slot="context-menu-popup" className={className} {...props} />;
}

function ContextMenuArrow({ className, ...props }: BaseContextMenu.Arrow.Props) {
  return <BaseContextMenu.Arrow data-slot="context-menu-arrow" className={className} {...props} />;
}

function ContextMenuItem({ className, ...props }: BaseContextMenu.Item.Props) {
  return <BaseContextMenu.Item data-slot="context-menu-item" className={className} {...props} />;
}

function ContextMenuLinkItem({ className, ...props }: BaseContextMenu.LinkItem.Props) {
  return (
    <BaseContextMenu.LinkItem data-slot="context-menu-link-item" className={className} {...props} />
  );
}

function ContextMenuSeparator({ className, ...props }: BaseContextMenu.Separator.Props) {
  return (
    <BaseContextMenu.Separator
      data-slot="context-menu-separator"
      className={className}
      {...props}
    />
  );
}

function ContextMenuSubmenu(props: BaseContextMenu.SubmenuRoot.Props) {
  return <BaseContextMenu.SubmenuRoot {...props} />;
}

function ContextMenuSubmenuTrigger({ className, ...props }: BaseContextMenu.SubmenuTrigger.Props) {
  return (
    <BaseContextMenu.SubmenuTrigger
      data-slot="context-menu-submenu-trigger"
      className={className}
      {...props}
    />
  );
}

function ContextMenuGroup({ className, ...props }: BaseContextMenu.Group.Props) {
  return <BaseContextMenu.Group data-slot="context-menu-group" className={className} {...props} />;
}

function ContextMenuGroupLabel({ className, ...props }: BaseContextMenu.GroupLabel.Props) {
  return (
    <BaseContextMenu.GroupLabel
      data-slot="context-menu-group-label"
      className={className}
      {...props}
    />
  );
}

function ContextMenuRadioGroup({ className, ...props }: BaseContextMenu.RadioGroup.Props) {
  return (
    <BaseContextMenu.RadioGroup
      data-slot="context-menu-radio-group"
      className={className}
      {...props}
    />
  );
}

function ContextMenuRadioItem({ className, ...props }: BaseContextMenu.RadioItem.Props) {
  return (
    <BaseContextMenu.RadioItem
      data-slot="context-menu-radio-item"
      className={className}
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
      className={className}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({ className, ...props }: BaseContextMenu.CheckboxItem.Props) {
  return (
    <BaseContextMenu.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={className}
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
      className={className}
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
