import { Select as BaseSelect } from "@base-ui/react/select";

function Select<Value, Multiple extends boolean | undefined = false>(
  props: BaseSelect.Root.Props<Value, Multiple>,
) {
  return <BaseSelect.Root {...props} />;
}

function SelectLabel({ className, ...props }: BaseSelect.Label.Props) {
  return <BaseSelect.Label data-slot="select-label" className={className} {...props} />;
}

function SelectTrigger({ className, ...props }: BaseSelect.Trigger.Props) {
  return <BaseSelect.Trigger data-slot="select-trigger" className={className} {...props} />;
}

function SelectValue({ className, ...props }: BaseSelect.Value.Props) {
  return <BaseSelect.Value data-slot="select-value" className={className} {...props} />;
}

function SelectIcon({ className, ...props }: BaseSelect.Icon.Props) {
  return <BaseSelect.Icon data-slot="select-icon" className={className} {...props} />;
}

function SelectPortal({ className, ...props }: BaseSelect.Portal.Props) {
  return <BaseSelect.Portal data-slot="select-portal" className={className} {...props} />;
}

function SelectBackdrop({ className, ...props }: BaseSelect.Backdrop.Props) {
  return <BaseSelect.Backdrop data-slot="select-backdrop" className={className} {...props} />;
}

function SelectPositioner({ className, ...props }: BaseSelect.Positioner.Props) {
  return <BaseSelect.Positioner data-slot="select-positioner" className={className} {...props} />;
}

function SelectPopup({ className, ...props }: BaseSelect.Popup.Props) {
  return <BaseSelect.Popup data-slot="select-popup" className={className} {...props} />;
}

function SelectScrollUpArrow({ className, ...props }: BaseSelect.ScrollUpArrow.Props) {
  return (
    <BaseSelect.ScrollUpArrow data-slot="select-scroll-up-arrow" className={className} {...props} />
  );
}

function SelectArrow({ className, ...props }: BaseSelect.Arrow.Props) {
  return <BaseSelect.Arrow data-slot="select-arrow" className={className} {...props} />;
}

function SelectList({ className, ...props }: BaseSelect.List.Props) {
  return <BaseSelect.List data-slot="select-list" className={className} {...props} />;
}

function SelectItem({ className, ...props }: BaseSelect.Item.Props) {
  return <BaseSelect.Item data-slot="select-item" className={className} {...props} />;
}

function SelectItemText({ className, ...props }: BaseSelect.ItemText.Props) {
  return <BaseSelect.ItemText data-slot="select-item-text" className={className} {...props} />;
}

function SelectItemIndicator({ className, ...props }: BaseSelect.ItemIndicator.Props) {
  return (
    <BaseSelect.ItemIndicator data-slot="select-item-indicator" className={className} {...props} />
  );
}

function SelectSeparator({ className, ...props }: BaseSelect.Separator.Props) {
  return <BaseSelect.Separator data-slot="select-separator" className={className} {...props} />;
}

function SelectGroup({ className, ...props }: BaseSelect.Group.Props) {
  return <BaseSelect.Group data-slot="select-group" className={className} {...props} />;
}

function SelectGroupLabel({ className, ...props }: BaseSelect.GroupLabel.Props) {
  return <BaseSelect.GroupLabel data-slot="select-group-label" className={className} {...props} />;
}

function SelectScrollDownArrow({ className, ...props }: BaseSelect.ScrollDownArrow.Props) {
  return (
    <BaseSelect.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      className={className}
      {...props}
    />
  );
}

export {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectPositioner,
  SelectPopup,
  SelectScrollUpArrow,
  SelectArrow,
  SelectList,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectSeparator,
  SelectGroup,
  SelectGroupLabel,
  SelectScrollDownArrow,
};
