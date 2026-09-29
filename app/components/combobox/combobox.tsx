import { mergeProps, useRender } from "@base-ui/react";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";

const useComboboxFilter = BaseCombobox.useFilter;
const useComboboxFilteredItems = BaseCombobox.useFilteredItems;

function Combobox<Items extends readonly { items: readonly unknown[] }[]>(
  props: Omit<BaseCombobox.Root.Props<Items[number]["items"][number]>, "items"> & {
    items: Items;
  },
): React.JSX.Element;
function Combobox<ItemValue>(
  props: Omit<BaseCombobox.Root.Props<ItemValue>, "items"> & {
    items?: readonly ItemValue[] | undefined;
  },
): React.JSX.Element;
function Combobox<ItemValue>({ items, ...props }: BaseCombobox.Root.Props<ItemValue>) {
  return <BaseCombobox.Root items={items as unknown as ItemValue[]} {...props} />;
}

function ComboboxLabel({ className, ...props }: BaseCombobox.Label.Props) {
  return <BaseCombobox.Label data-slot="combobox-label" className={className} {...props} />;
}

function ComboboxControl({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const control = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "combobox-control" },
    render,
  });

  return control;
}

function ComboboxInputGroup({ className, ...props }: BaseCombobox.InputGroup.Props) {
  return (
    <BaseCombobox.InputGroup data-slot="combobox-input-group" className={className} {...props} />
  );
}

function ComboboxInput({ className, ...props }: BaseCombobox.Input.Props) {
  return <BaseCombobox.Input data-slot="combobox-input" className={className} {...props} />;
}

function ComboboxTrigger({ className, ...props }: BaseCombobox.Trigger.Props) {
  return <BaseCombobox.Trigger data-slot="combobox-trigger" className={className} {...props} />;
}

function ComboboxIcon({ className, ...props }: BaseCombobox.Icon.Props) {
  return <BaseCombobox.Icon data-slot="combobox-icon" className={className} {...props} />;
}

function ComboboxClear({ className, ...props }: BaseCombobox.Clear.Props) {
  return <BaseCombobox.Clear data-slot="combobox-clear" className={className} {...props} />;
}

function ComboboxValue(props: BaseCombobox.Value.Props) {
  return <BaseCombobox.Value {...props} />;
}

function ComboboxChips({ className, ...props }: BaseCombobox.Chips.Props) {
  return <BaseCombobox.Chips data-slot="combobox-chips" className={className} {...props} />;
}

function ComboboxChip({ className, ...props }: BaseCombobox.Chip.Props) {
  return <BaseCombobox.Chip data-slot="combobox-chip" className={className} {...props} />;
}

function ComboboxChipRemove({ className, ...props }: BaseCombobox.ChipRemove.Props) {
  return (
    <BaseCombobox.ChipRemove data-slot="combobox-chip-remove" className={className} {...props} />
  );
}

function ComboboxPortal({ className, ...props }: BaseCombobox.Portal.Props) {
  return <BaseCombobox.Portal data-slot="combobox-portal" className={className} {...props} />;
}

function ComboboxBackdrop({ className, ...props }: BaseCombobox.Backdrop.Props) {
  return <BaseCombobox.Backdrop data-slot="combobox-backdrop" className={className} {...props} />;
}

function ComboboxPositioner({ className, ...props }: BaseCombobox.Positioner.Props) {
  return (
    <BaseCombobox.Positioner data-slot="combobox-positioner" className={className} {...props} />
  );
}

function ComboboxPopup({ className, ...props }: BaseCombobox.Popup.Props) {
  return <BaseCombobox.Popup data-slot="combobox-popup" className={className} {...props} />;
}

function ComboboxArrow({ className, ...props }: BaseCombobox.Arrow.Props) {
  return <BaseCombobox.Arrow data-slot="combobox-arrow" className={className} {...props} />;
}

function ComboboxStatus({
  className,
  contentClassName,
  show = true,
  children,
  ...props
}: BaseCombobox.Status.Props & { show?: boolean; contentClassName?: string }) {
  return (
    <BaseCombobox.Status data-slot="combobox-status" className={className} {...props}>
      {show && (
        <div data-slot="combobox-status-content" className={contentClassName}>
          {children}
        </div>
      )}
    </BaseCombobox.Status>
  );
}

function ComboboxEmpty({
  className,
  contentClassName,
  show = true,
  children,
  ...props
}: BaseCombobox.Empty.Props & { show?: boolean; contentClassName?: string }) {
  return (
    <BaseCombobox.Empty data-slot="combobox-empty" className={className} {...props}>
      {show && (
        <div data-slot="combobox-empty-content" className={contentClassName}>
          {children}
        </div>
      )}
    </BaseCombobox.Empty>
  );
}

function ComboboxList({ className, ...props }: BaseCombobox.List.Props) {
  return <BaseCombobox.List data-slot="combobox-list" className={className} {...props} />;
}

function ComboboxRow({ className, ...props }: BaseCombobox.Row.Props) {
  return <BaseCombobox.Row data-slot="combobox-row" className={className} {...props} />;
}

function ComboboxItem({ className, ...props }: BaseCombobox.Item.Props) {
  return <BaseCombobox.Item data-slot="combobox-item" className={className} {...props} />;
}

function ComboboxItemIndicator({ className, ...props }: BaseCombobox.ItemIndicator.Props) {
  return (
    <BaseCombobox.ItemIndicator
      data-slot="combobox-item-indicator"
      className={className}
      {...props}
    />
  );
}

function ComboboxSeparator({ className, ...props }: BaseCombobox.Separator.Props) {
  return <BaseCombobox.Separator data-slot="combobox-separator" className={className} {...props} />;
}

function ComboboxGroup({ className, ...props }: BaseCombobox.Group.Props) {
  return <BaseCombobox.Group data-slot="combobox-group" className={className} {...props} />;
}

function ComboboxGroupLabel({ className, ...props }: BaseCombobox.GroupLabel.Props) {
  return (
    <BaseCombobox.GroupLabel data-slot="combobox-group-label" className={className} {...props} />
  );
}

function ComboboxCollection(props: BaseCombobox.Collection.Props) {
  return <BaseCombobox.Collection {...props} />;
}

export {
  useComboboxFilter,
  useComboboxFilteredItems,
  Combobox,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInputGroup,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxIcon,
  ComboboxClear,
  ComboboxValue,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxPortal,
  ComboboxBackdrop,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxArrow,
  ComboboxStatus,
  ComboboxEmpty,
  ComboboxList,
  ComboboxRow,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxCollection,
};
