"use client";

import { mergeProps, useDirection, useRender } from "@base-ui/react";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { ChevronDownIcon, XIcon } from "lucide-react";
import React, { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import {
  autocomplete,
  type AutocompleteVariantProps,
} from "./autocomplete.style";

type AutocompleteContext = AutocompleteVariantProps;

const AutocompleteContext = createContext<AutocompleteContext>({
  size: "md",
});

function useAutocomplete() {
  return useContext(AutocompleteContext);
}

const POSITIONER_SIDE_OFFSET = 6;

const useAutocompleteFilter = BaseAutocomplete.useFilter;
const useAutocompleteFilteredItems = BaseAutocomplete.useFilteredItems;

function Autocomplete<Items extends readonly { items: readonly unknown[] }[]>(
  props: Omit<
    BaseAutocomplete.Root.Props<Items[number]["items"][number]>,
    "items"
  > & {
    items: Items;
  } & AutocompleteVariantProps,
): React.JSX.Element;
function Autocomplete<ItemValue>(
  props: Omit<BaseAutocomplete.Root.Props<ItemValue>, "items"> & {
    items?: readonly ItemValue[] | undefined;
  } & AutocompleteVariantProps,
): React.JSX.Element;
function Autocomplete<ItemValue>({
  size,
  items,
  children,
  ...props
}: BaseAutocomplete.Root.Props<ItemValue> & AutocompleteVariantProps) {
  return (
    <AutocompleteContext.Provider value={{ size }}>
      <BaseAutocomplete.Root items={items as unknown as ItemValue[]} {...props}>
        {children}
      </BaseAutocomplete.Root>
    </AutocompleteContext.Provider>
  );
}

function AutocompleteControl({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const direction = useDirection();

  const control = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">(
        { className: autocomplete().control({ className }) },
        props,
      ),
      dir: direction,
      "data-slot": "autocomplete-control",
    },
    render,
  });

  return control;
}

function AutocompleteInputGroup({
  className,
  ...props
}: BaseAutocomplete.InputGroup.Props) {
  return (
    <BaseAutocomplete.InputGroup
      data-slot="autocomplete-input-group"
      className={mergeSlotClassName(autocomplete().inputGroup, className)}
      {...props}
    />
  );
}

function AutocompleteInput({
  className,
  ...props
}: BaseAutocomplete.Input.Props) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.Input
      data-slot="autocomplete-input"
      className={mergeSlotClassName(autocomplete({ size }).input, className)}
      {...props}
    />
  );
}

function AutocompleteInputGroupActions({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const { size } = useAutocomplete();

  const actions = useRender({
    defaultTagName: "div",
    props: {
      ...mergeProps<"div">(
        { className: autocomplete({ size }).inputGroupActions({ className }) },
        props,
      ),
      "data-slot": "autocomplete-input-group-actions",
    },
    render,
  });

  return actions;
}

function AutocompleteTrigger({
  className,
  "aria-label": ariaLabel = "Open popup",
  ...props
}: BaseAutocomplete.Trigger.Props) {
  return (
    <BaseAutocomplete.Trigger
      data-slot="autocomplete-trigger"
      aria-label={ariaLabel}
      className={mergeSlotClassName(autocomplete().trigger, className)}
      {...props}
    />
  );
}

function AutocompleteIcon({
  className,
  children,
  ...props
}: BaseAutocomplete.Icon.Props) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.Icon
      data-slot="autocomplete-icon"
      className={mergeSlotClassName(autocomplete({ size }).icon, className)}
      {...props}
    >
      {children ?? <ChevronDownIcon />}
    </BaseAutocomplete.Icon>
  );
}

function AutocompleteClear({
  className,
  children,
  "aria-label": ariaLabel = "Clear search",
  ...props
}: BaseAutocomplete.Clear.Props) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.Clear
      data-slot="autocomplete-clear"
      aria-label={ariaLabel}
      className={mergeSlotClassName(autocomplete({ size }).clear, className)}
      {...props}
    >
      {children ?? <XIcon />}
    </BaseAutocomplete.Clear>
  );
}

function AutocompleteValue(props: BaseAutocomplete.Value.Props) {
  return <BaseAutocomplete.Value {...props} />;
}

function AutocompletePortal({
  className,
  ...props
}: BaseAutocomplete.Portal.Props) {
  const direction = useDirection();

  return (
    <BaseAutocomplete.Portal
      data-slot="autocomplete-portal"
      className={mergeSlotClassName(autocomplete().portal, className)}
      {...props}
      dir={direction}
    />
  );
}

function AutocompleteBackdrop({
  className,
  ...props
}: BaseAutocomplete.Backdrop.Props) {
  return (
    <BaseAutocomplete.Backdrop
      data-slot="autocomplete-backdrop"
      className={mergeSlotClassName(autocomplete().backdrop, className)}
      {...props}
    />
  );
}

function AutocompletePositioner({
  className,
  sideOffset = POSITIONER_SIDE_OFFSET,
  ...props
}: BaseAutocomplete.Positioner.Props) {
  return (
    <BaseAutocomplete.Positioner
      data-slot="autocomplete-positioner"
      className={mergeSlotClassName(autocomplete().positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  ...props
}: BaseAutocomplete.Popup.Props) {
  return (
    <BaseAutocomplete.Popup
      data-slot="autocomplete-popup"
      className={mergeSlotClassName(autocomplete().popup, className)}
      {...props}
    />
  );
}

function AutocompleteArrow({
  className,
  ...props
}: BaseAutocomplete.Arrow.Props) {
  return (
    <BaseAutocomplete.Arrow
      data-slot="autocomplete-arrow"
      className={mergeSlotClassName(autocomplete().arrow, className)}
      {...props}
    />
  );
}

function AutocompleteStatus({
  className,
  contentClassName,
  show = true,
  children,
  ...props
}: BaseAutocomplete.Status.Props & {
  show?: boolean;
  contentClassName?: string;
}) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.Status
      data-slot="autocomplete-status"
      className={mergeSlotClassName(autocomplete().status, className)}
      {...props}
    >
      {show && (
        <div
          data-slot="autocomplete-status-content"
          className={autocomplete({ size }).statusContent({
            className: contentClassName,
          })}
        >
          {children}
        </div>
      )}
    </BaseAutocomplete.Status>
  );
}

function AutocompleteEmpty({
  className,
  contentClassName,
  show = true,
  children,
  ...props
}: BaseAutocomplete.Empty.Props & {
  show?: boolean;
  contentClassName?: string;
}) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.Empty
      data-slot="autocomplete-empty"
      className={mergeSlotClassName(autocomplete().empty, className)}
      {...props}
    >
      {show && (
        <div
          data-slot="autocomplete-empty-content"
          className={autocomplete({ size }).emptyContent({
            className: contentClassName,
          })}
        >
          {children}
        </div>
      )}
    </BaseAutocomplete.Empty>
  );
}

function AutocompleteList({
  className,
  ...props
}: BaseAutocomplete.List.Props) {
  return (
    <BaseAutocomplete.List
      data-slot="autocomplete-list"
      className={mergeSlotClassName(autocomplete().list, className)}
      {...props}
    />
  );
}

function AutocompleteRow({ className, ...props }: BaseAutocomplete.Row.Props) {
  return (
    <BaseAutocomplete.Row
      data-slot="autocomplete-row"
      className={mergeSlotClassName(autocomplete().row, className)}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: BaseAutocomplete.Item.Props) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.Item
      data-slot="autocomplete-item"
      className={mergeSlotClassName(autocomplete({ size }).item, className)}
      {...props}
    />
  );
}

function AutocompleteSeparator({
  className,
  ...props
}: BaseAutocomplete.Separator.Props) {
  return (
    <BaseAutocomplete.Separator
      data-slot="autocomplete-separator"
      className={mergeSlotClassName(autocomplete().separator, className)}
      {...props}
    />
  );
}

function AutocompleteGroup({
  className,
  ...props
}: BaseAutocomplete.Group.Props) {
  return (
    <BaseAutocomplete.Group
      data-slot="autocomplete-group"
      className={mergeSlotClassName(autocomplete().group, className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: BaseAutocomplete.GroupLabel.Props) {
  const { size } = useAutocomplete();

  return (
    <BaseAutocomplete.GroupLabel
      data-slot="autocomplete-group-label"
      className={mergeSlotClassName(
        autocomplete({ size }).groupLabel,
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteCollection(props: BaseAutocomplete.Collection.Props) {
  return <BaseAutocomplete.Collection {...props} />;
}

export {
  useAutocompleteFilter,
  useAutocompleteFilteredItems,
  Autocomplete,
  AutocompleteControl,
  AutocompleteInputGroup,
  AutocompleteInput,
  AutocompleteInputGroupActions,
  AutocompleteTrigger,
  AutocompleteIcon,
  AutocompleteClear,
  AutocompleteValue,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteArrow,
  AutocompleteStatus,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteRow,
  AutocompleteItem,
  AutocompleteSeparator,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
};
