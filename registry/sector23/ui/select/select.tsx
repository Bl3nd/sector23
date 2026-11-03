"use client";

import { useDirection } from "@base-ui/react";
import { Select as BaseSelect } from "@base-ui/react/select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { select, type SelectVariantProps } from "./select.style";

type SelectContext = SelectVariantProps;

const SelectContext = createContext<SelectContext>({
  size: "md",
});

function useSelect() {
  return useContext(SelectContext);
}

const POSITIONER_SIDE_OFFSET = 6;

function Select<Value, Multiple extends boolean | undefined = false>({
  size,
  children,
  ...props
}: BaseSelect.Root.Props<Value, Multiple> & SelectVariantProps) {
  return (
    <SelectContext.Provider value={{ size }}>
      <BaseSelect.Root {...props}>{children}</BaseSelect.Root>
    </SelectContext.Provider>
  );
}

function SelectLabel({ className, ...props }: BaseSelect.Label.Props) {
  const direction = useDirection();

  return (
    <BaseSelect.Label
      data-slot="select-label"
      className={mergeSlotClassName(select().label, className)}
      {...props}
      dir={direction}
    />
  );
}

function SelectTrigger({ className, ...props }: BaseSelect.Trigger.Props) {
  const direction = useDirection();
  const { size } = useSelect();

  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={mergeSlotClassName(select({ size }).trigger, className)}
      {...props}
      dir={direction}
    />
  );
}

function SelectValue({ className, ...props }: BaseSelect.Value.Props) {
  return (
    <BaseSelect.Value
      data-slot="select-value"
      className={mergeSlotClassName(select().value, className)}
      {...props}
    />
  );
}

function SelectIcon({ className, children, ...props }: BaseSelect.Icon.Props) {
  const { size } = useSelect();

  return (
    <BaseSelect.Icon
      data-slot="select-icon"
      className={mergeSlotClassName(select({ size }).icon, className)}
      {...props}
    >
      {children ?? <ChevronsUpDownIcon />}
    </BaseSelect.Icon>
  );
}

function SelectPortal({ className, ...props }: BaseSelect.Portal.Props) {
  const direction = useDirection();

  return (
    <BaseSelect.Portal
      data-slot="select-portal"
      className={mergeSlotClassName(select().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function SelectBackdrop({ className, ...props }: BaseSelect.Backdrop.Props) {
  return (
    <BaseSelect.Backdrop
      data-slot="select-backdrop"
      className={mergeSlotClassName(select().backdrop, className)}
      {...props}
    />
  );
}

function SelectPositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BaseSelect.Positioner.Props) {
  return (
    <BaseSelect.Positioner
      data-slot="select-positioner"
      className={mergeSlotClassName(select().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function SelectPopup({ className, ...props }: BaseSelect.Popup.Props) {
  return (
    <BaseSelect.Popup
      data-slot="select-popup"
      className={mergeSlotClassName(select().popup, className)}
      {...props}
    />
  );
}

function SelectScrollUpArrow({
  className,
  children,
  ...props
}: BaseSelect.ScrollUpArrow.Props) {
  return (
    <BaseSelect.ScrollUpArrow
      data-slot="select-scroll-up-arrow"
      className={mergeSlotClassName(select().scrollUpArrow, className)}
      {...props}
    >
      {children ?? <ChevronUpIcon />}
    </BaseSelect.ScrollUpArrow>
  );
}

function SelectArrow({ className, ...props }: BaseSelect.Arrow.Props) {
  return (
    <BaseSelect.Arrow
      data-slot="select-arrow"
      className={mergeSlotClassName(select().arrow, className)}
      {...props}
    />
  );
}

function SelectList({ className, ...props }: BaseSelect.List.Props) {
  return (
    <BaseSelect.List
      data-slot="select-list"
      className={mergeSlotClassName(select().list, className)}
      {...props}
    />
  );
}

function SelectItem({ className, ...props }: BaseSelect.Item.Props) {
  const { size } = useSelect();

  return (
    <BaseSelect.Item
      data-slot="select-item"
      className={mergeSlotClassName(select({ size }).item, className)}
      {...props}
    />
  );
}

function SelectItemText({ className, ...props }: BaseSelect.ItemText.Props) {
  const { size } = useSelect();

  return (
    <BaseSelect.ItemText
      data-slot="select-item-text"
      className={mergeSlotClassName(select({ size }).itemText, className)}
      {...props}
    />
  );
}

function SelectItemIndicator({
  className,
  children,
  ...props
}: BaseSelect.ItemIndicator.Props) {
  const { size } = useSelect();

  return (
    <BaseSelect.ItemIndicator
      data-slot="select-item-indicator"
      className={mergeSlotClassName(select({ size }).itemIndicator, className)}
      {...props}
    >
      {children ?? <CheckIcon />}
    </BaseSelect.ItemIndicator>
  );
}

function SelectSeparator({ className, ...props }: BaseSelect.Separator.Props) {
  return (
    <BaseSelect.Separator
      data-slot="select-separator"
      className={mergeSlotClassName(select().separator, className)}
      {...props}
    />
  );
}

function SelectGroup({ className, ...props }: BaseSelect.Group.Props) {
  return (
    <BaseSelect.Group
      data-slot="select-group"
      className={mergeSlotClassName(select().group, className)}
      {...props}
    />
  );
}

function SelectGroupLabel({
  className,
  ...props
}: BaseSelect.GroupLabel.Props) {
  const { size } = useSelect();

  return (
    <BaseSelect.GroupLabel
      data-slot="select-group-label"
      className={mergeSlotClassName(select({ size }).groupLabel, className)}
      {...props}
    />
  );
}

function SelectScrollDownArrow({
  className,
  children,
  ...props
}: BaseSelect.ScrollDownArrow.Props) {
  return (
    <BaseSelect.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      className={mergeSlotClassName(select().scrollDownArrow, className)}
      {...props}
    >
      {children ?? <ChevronDownIcon />}
    </BaseSelect.ScrollDownArrow>
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
