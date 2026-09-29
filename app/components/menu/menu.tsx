import { Menu as BaseMenu } from "@base-ui/react/menu";

const createMenuHandle = BaseMenu.createHandle;

function Menu(props: BaseMenu.Root.Props) {
  return <BaseMenu.Root {...props} />;
}

function MenuTrigger({ className, ...props }: BaseMenu.Trigger.Props) {
  return <BaseMenu.Trigger data-slot="menu-trigger" className={className} {...props} />;
}

function MenuPortal({ className, ...props }: BaseMenu.Portal.Props) {
  return <BaseMenu.Portal data-slot="menu-portal" className={className} {...props} />;
}

function MenuBackdrop({ className, ...props }: BaseMenu.Backdrop.Props) {
  return <BaseMenu.Backdrop data-slot="menu-backdrop" className={className} {...props} />;
}

function MenuPositioner({ className, ...props }: BaseMenu.Positioner.Props) {
  return <BaseMenu.Positioner data-slot="menu-positioner" className={className} {...props} />;
}

function MenuPopup({ className, ...props }: BaseMenu.Popup.Props) {
  return <BaseMenu.Popup data-slot="menu-popup" className={className} {...props} />;
}

function MenuArrow({ className, ...props }: BaseMenu.Arrow.Props) {
  return <BaseMenu.Arrow data-slot="menu-arrow" className={className} {...props} />;
}

function MenuItem({ className, ...props }: BaseMenu.Item.Props) {
  return <BaseMenu.Item data-slot="menu-item" className={className} {...props} />;
}

function MenuLinkItem({ className, ...props }: BaseMenu.LinkItem.Props) {
  return <BaseMenu.LinkItem data-slot="menu-link-item" className={className} {...props} />;
}

function MenuSeparator({ className, ...props }: BaseMenu.Separator.Props) {
  return <BaseMenu.Separator data-slot="menu-separator" className={className} {...props} />;
}

function MenuSubmenu(props: BaseMenu.SubmenuRoot.Props) {
  return <BaseMenu.SubmenuRoot {...props} />;
}

function MenuSubmenuTrigger({ className, ...props }: BaseMenu.SubmenuTrigger.Props) {
  return (
    <BaseMenu.SubmenuTrigger data-slot="menu-submenu-trigger" className={className} {...props} />
  );
}

function MenuGroup({ className, ...props }: BaseMenu.Group.Props) {
  return <BaseMenu.Group data-slot="menu-group" className={className} {...props} />;
}

function MenuGroupLabel({ className, ...props }: BaseMenu.GroupLabel.Props) {
  return <BaseMenu.GroupLabel data-slot="menu-group-label" className={className} {...props} />;
}

function MenuRadioGroup({ className, ...props }: BaseMenu.RadioGroup.Props) {
  return <BaseMenu.RadioGroup data-slot="menu-radio-group" className={className} {...props} />;
}

function MenuRadioItem({ className, ...props }: BaseMenu.RadioItem.Props) {
  return <BaseMenu.RadioItem data-slot="menu-radio-item" className={className} {...props} />;
}

function MenuRadioItemIndicator({ className, ...props }: BaseMenu.RadioItemIndicator.Props) {
  return (
    <BaseMenu.RadioItemIndicator
      data-slot="menu-radio-item-indicator"
      className={className}
      {...props}
    />
  );
}

function MenuCheckboxItem({ className, ...props }: BaseMenu.CheckboxItem.Props) {
  return <BaseMenu.CheckboxItem data-slot="menu-checkbox-item" className={className} {...props} />;
}

function MenuCheckboxItemIndicator({ className, ...props }: BaseMenu.CheckboxItemIndicator.Props) {
  return (
    <BaseMenu.CheckboxItemIndicator
      data-slot="menu-checkbox-item-indicator"
      className={className}
      {...props}
    />
  );
}

function MenuViewport({ className, ...props }: BaseMenu.Viewport.Props) {
  return <BaseMenu.Viewport data-slot="menu-viewport" className={className} {...props} />;
}

export {
  createMenuHandle,
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuBackdrop,
  MenuPositioner,
  MenuPopup,
  MenuArrow,
  MenuItem,
  MenuLinkItem,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuViewport,
};
