import { mergeProps, useRender } from "@base-ui/react";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import React from "react";

const useAutocompleteFilter = BaseAutocomplete.useFilter;
const useAutocompleteFilteredItems = BaseAutocomplete.useFilteredItems;

function Autocomplete<Items extends readonly { items: readonly unknown[] }[]>(
  props: Omit<BaseAutocomplete.Root.Props<Items[number]["items"][number]>, "items"> & {
    items: Items;
  },
): React.JSX.Element;
function Autocomplete<ItemValue>(
  props: Omit<BaseAutocomplete.Root.Props<ItemValue>, "items"> & {
    items?: readonly ItemValue[] | undefined;
  },
): React.JSX.Element;
function Autocomplete<ItemValue>({ items, ...props }: BaseAutocomplete.Root.Props<ItemValue>) {
  return <BaseAutocomplete.Root items={items as unknown as ItemValue[]} {...props} />;
}

function AutocompleteControl({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const control = useRender({
    defaultTagName: "div",
    props: { ...mergeProps<"div">({ className }, props), "data-slot": "autocomplete-control" },
    render,
  });

  return control;
}

function AutocompleteInputGroup({ className, ...props }: BaseAutocomplete.InputGroup.Props) {
  return (
    <BaseAutocomplete.InputGroup
      data-slot="autocomplete-input-group"
      className={className}
      {...props}
    />
  );
}

function AutocompleteInput({ className, ...props }: BaseAutocomplete.Input.Props) {
  return <BaseAutocomplete.Input data-slot="autocomplete-input" className={className} {...props} />;
}

function AutocompleteTrigger({ className, ...props }: BaseAutocomplete.Trigger.Props) {
  return (
    <BaseAutocomplete.Trigger data-slot="autocomplete-trigger" className={className} {...props} />
  );
}

function AutocompleteIcon({ className, ...props }: BaseAutocomplete.Icon.Props) {
  return <BaseAutocomplete.Icon data-slot="autocomplete-icon" className={className} {...props} />;
}

function AutocompleteClear({ className, ...props }: BaseAutocomplete.Clear.Props) {
  return <BaseAutocomplete.Clear data-slot="autocomplete-clear" className={className} {...props} />;
}

function AutocompleteValue(props: BaseAutocomplete.Value.Props) {
  return <BaseAutocomplete.Value {...props} />;
}

function AutocompletePortal({ className, ...props }: BaseAutocomplete.Portal.Props) {
  return (
    <BaseAutocomplete.Portal data-slot="autocomplete-portal" className={className} {...props} />
  );
}

function AutocompleteBackdrop({ className, ...props }: BaseAutocomplete.Backdrop.Props) {
  return (
    <BaseAutocomplete.Backdrop data-slot="autocomplete-backdrop" className={className} {...props} />
  );
}

function AutocompletePositioner({ className, ...props }: BaseAutocomplete.Positioner.Props) {
  return (
    <BaseAutocomplete.Positioner
      data-slot="autocomplete-positioner"
      className={className}
      {...props}
    />
  );
}

function AutocompletePopup({ className, ...props }: BaseAutocomplete.Popup.Props) {
  return <BaseAutocomplete.Popup data-slot="autocomplete-popup" className={className} {...props} />;
}

function AutocompleteArrow({ className, ...props }: BaseAutocomplete.Arrow.Props) {
  return <BaseAutocomplete.Arrow data-slot="autocomplete-arrow" className={className} {...props} />;
}

function AutocompleteStatus({
  className,
  contentClassName,
  show = true,
  children,
  ...props
}: BaseAutocomplete.Status.Props & { show?: boolean; contentClassName?: string }) {
  return (
    <BaseAutocomplete.Status data-slot="autocomplete-status" className={className} {...props}>
      {show && (
        <div data-slot="autocomplete-status-content" className={contentClassName}>
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
}: BaseAutocomplete.Empty.Props & { show?: boolean; contentClassName?: string }) {
  return (
    <BaseAutocomplete.Empty data-slot="autocomplete-empty" className={className} {...props}>
      {show && (
        <div data-slot="autocomplete-empty-content" className={contentClassName}>
          {children}
        </div>
      )}
    </BaseAutocomplete.Empty>
  );
}

function AutocompleteList({ className, ...props }: BaseAutocomplete.List.Props) {
  return <BaseAutocomplete.List data-slot="autocomplete-list" className={className} {...props} />;
}

function AutocompleteRow({ className, ...props }: BaseAutocomplete.Row.Props) {
  return <BaseAutocomplete.Row data-slot="autocomplete-row" className={className} {...props} />;
}

function AutocompleteItem({ className, ...props }: BaseAutocomplete.Item.Props) {
  return <BaseAutocomplete.Item data-slot="autocomplete-item" className={className} {...props} />;
}

function AutocompleteSeparator({ className, ...props }: BaseAutocomplete.Separator.Props) {
  return (
    <BaseAutocomplete.Separator
      data-slot="autocomplete-separator"
      className={className}
      {...props}
    />
  );
}

function AutocompleteGroup({ className, ...props }: BaseAutocomplete.Group.Props) {
  return <BaseAutocomplete.Group data-slot="autocomplete-group" className={className} {...props} />;
}

function AutocompleteGroupLabel({ className, ...props }: BaseAutocomplete.GroupLabel.Props) {
  return (
    <BaseAutocomplete.GroupLabel
      data-slot="autocomplete-group-label"
      className={className}
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
