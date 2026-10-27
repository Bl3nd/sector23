"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { combobox, type ComboboxVariantProps } from "./combobox.style";

type ComboboxContext = ComboboxVariantProps;

const ComboboxContext = createContext<ComboboxContext>({
  size: "md",
});

function useComboboxContext() {
  return useContext(ComboboxContext);
}

const POSITIONER_SIDE_OFFSET = 6;

const useComboboxFilter = BaseCombobox.useFilter;
const useComboboxFilteredItems = BaseCombobox.useFilteredItems;

function Combobox<
  Value,
  Multiple extends boolean | undefined = false,
  Item = Value,
>({
  size,
  children,
  ...props
}: BaseCombobox.Root.Props<Value, Multiple, Item> & ComboboxVariantProps) {
  return (
    <ComboboxContext.Provider value={{ size }}>
      <BaseCombobox.Root {...props}>{children}</BaseCombobox.Root>
    </ComboboxContext.Provider>
  );
}

function ComboboxLabel({ className, ...props }: BaseCombobox.Label.Props) {
  return (
    <BaseCombobox.Label
      data-slot="combobox-label"
      className={mergeSlotClassName(combobox().label, className)}
      {...props}
    />
  );
}

function ComboboxControl({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const direction = useDirection();

  const control = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">(
        { className: combobox().control({ className }) },
        props,
      ),
      dir: direction,
      "data-slot": "combobox-control",
    },
    render,
  });

  return control;
}

function ComboboxInputGroup({
  className,
  ...props
}: BaseCombobox.InputGroup.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.InputGroup
      data-slot="combobox-input-group"
      className={mergeSlotClassName(combobox({ size }).inputGroup, className)}
      {...props}
    />
  );
}

function ComboboxInput({ className, ...props }: BaseCombobox.Input.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Input
      data-slot="combobox-input"
      className={mergeSlotClassName(combobox({ size }).input, className)}
      {...props}
    />
  );
}

function ComboboxInputGroupActions({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const { size } = useComboboxContext();

  const actions = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">(
        { className: combobox({ size }).inputGroupActions({ className }) },
        props,
      ),
      "data-slot": "combobox-input-group-actions",
    },
    render,
  });

  return actions;
}

function ComboboxTrigger({ className, ...props }: BaseCombobox.Trigger.Props) {
  return (
    <BaseCombobox.Trigger
      data-slot="combobox-trigger"
      className={mergeSlotClassName(combobox().trigger, className)}
      {...props}
    />
  );
}

function ComboboxIcon({
  className,
  children,
  ...props
}: BaseCombobox.Icon.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Icon
      data-slot="combobox-icon"
      className={mergeSlotClassName(combobox({ size }).icon, className)}
      {...props}
    >
      {children ?? <ChevronDownIcon />}
    </BaseCombobox.Icon>
  );
}

function ComboboxClear({
  className,
  children,
  ...props
}: BaseCombobox.Clear.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Clear
      data-slot="combobox-clear"
      className={mergeSlotClassName(combobox({ size }).clear, className)}
      {...props}
    >
      {children ?? <XIcon />}
    </BaseCombobox.Clear>
  );
}

function ComboboxValue(props: BaseCombobox.Value.Props) {
  return <BaseCombobox.Value {...props} />;
}

function ComboboxChips({ className, ...props }: BaseCombobox.Chips.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Chips
      data-slot="combobox-chips"
      className={mergeSlotClassName(combobox({ size }).chips, className)}
      {...props}
    />
  );
}

function ComboboxChip({ className, ...props }: BaseCombobox.Chip.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Chip
      data-slot="combobox-chip"
      className={mergeSlotClassName(combobox({ size }).chip, className)}
      {...props}
    />
  );
}

function ComboboxChipRemove({
  className,
  children,
  ...props
}: BaseCombobox.ChipRemove.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.ChipRemove
      data-slot="combobox-chip-remove"
      className={mergeSlotClassName(combobox({ size }).chipRemove, className)}
      {...props}
    >
      {children ?? <XIcon />}
    </BaseCombobox.ChipRemove>
  );
}

function ComboboxPortal({ className, ...props }: BaseCombobox.Portal.Props) {
  const direction = useDirection();

  return (
    <BaseCombobox.Portal
      data-slot="combobox-portal"
      className={mergeSlotClassName(combobox().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function ComboboxBackdrop({
  className,
  ...props
}: BaseCombobox.Backdrop.Props) {
  return (
    <BaseCombobox.Backdrop
      data-slot="combobox-backdrop"
      className={mergeSlotClassName(combobox().backdrop, className)}
      {...props}
    />
  );
}

function ComboboxPositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BaseCombobox.Positioner.Props) {
  return (
    <BaseCombobox.Positioner
      data-slot="combobox-positioner"
      className={mergeSlotClassName(combobox().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function ComboboxPopup({ className, ...props }: BaseCombobox.Popup.Props) {
  return (
    <BaseCombobox.Popup
      data-slot="combobox-popup"
      className={mergeSlotClassName(combobox().popup, className)}
      {...props}
    />
  );
}

function ComboboxArrow({ className, ...props }: BaseCombobox.Arrow.Props) {
  return (
    <BaseCombobox.Arrow
      data-slot="combobox-arrow"
      className={mergeSlotClassName(combobox().arrow, className)}
      {...props}
    />
  );
}

function ComboboxStatus({
  className,
  contentClassName,
  show = true,
  children,
  ...props
}: BaseCombobox.Status.Props & { show?: boolean; contentClassName?: string }) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Status
      data-slot="combobox-status"
      className={mergeSlotClassName(combobox().status, className)}
      {...props}
    >
      {show && (
        <div
          data-slot="combobox-status-content"
          className={combobox({ size }).statusContent({
            className: contentClassName,
          })}
        >
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
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Empty
      data-slot="combobox-empty"
      className={mergeSlotClassName(combobox().empty, className)}
      {...props}
    >
      {show && (
        <div
          data-slot="combobox-empty-content"
          className={combobox({ size }).emptyContent({
            className: contentClassName,
          })}
        >
          {children}
        </div>
      )}
    </BaseCombobox.Empty>
  );
}

function ComboboxList({ className, ...props }: BaseCombobox.List.Props) {
  return (
    <BaseCombobox.List
      data-slot="combobox-list"
      className={mergeSlotClassName(combobox().list, className)}
      {...props}
    />
  );
}

function ComboboxRow({ className, ...props }: BaseCombobox.Row.Props) {
  return (
    <BaseCombobox.Row
      data-slot="combobox-row"
      className={mergeSlotClassName(combobox().row, className)}
      {...props}
    />
  );
}

function ComboboxItem({ className, ...props }: BaseCombobox.Item.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.Item
      data-slot="combobox-item"
      className={mergeSlotClassName(combobox({ size }).item, className)}
      {...props}
    />
  );
}

function ComboboxItemIndicator({
  className,
  children,
  ...props
}: BaseCombobox.ItemIndicator.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.ItemIndicator
      data-slot="combobox-item-indicator"
      className={mergeSlotClassName(
        combobox({ size }).itemIndicator,
        className,
      )}
      {...props}
    >
      {children ?? <CheckIcon />}
    </BaseCombobox.ItemIndicator>
  );
}

function ComboboxSeparator({
  className,
  ...props
}: BaseCombobox.Separator.Props) {
  return (
    <BaseCombobox.Separator
      data-slot="combobox-separator"
      className={mergeSlotClassName(combobox().separator, className)}
      {...props}
    />
  );
}

function ComboboxGroup({ className, ...props }: BaseCombobox.Group.Props) {
  return (
    <BaseCombobox.Group
      data-slot="combobox-group"
      className={mergeSlotClassName(combobox().group, className)}
      {...props}
    />
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: BaseCombobox.GroupLabel.Props) {
  const { size } = useComboboxContext();

  return (
    <BaseCombobox.GroupLabel
      data-slot="combobox-group-label"
      className={mergeSlotClassName(combobox({ size }).groupLabel, className)}
      {...props}
    />
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
  ComboboxInputGroupActions,
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
