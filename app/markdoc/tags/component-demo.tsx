import type { ReactNode } from "react";

import {
  AccordionAdditionalIcon,
  AccordionDefault,
  AccordionItemDisabled,
  AccordionRootDisabled,
} from "@/app/docs/components/accordion/demos";
import {
  AlertDialogDefault,
  AlertDialogDetachedTriggers,
  AlertDialogInnerScroll,
  AlertDialogNested,
} from "@/app/docs/components/alert-dialog/demos";
import {
  AutocompleteCommandPalette,
  AutocompleteDefault,
  AutocompleteDisabled,
  AutocompleteDisabledItem,
  AutocompleteGrid,
  AutocompleteGrouped,
  AutocompleteInputDemo,
  AutocompleteInvalid,
  AutocompleteReadonly,
  AutocompleteSize,
} from "@/app/docs/components/autocomplete/demos";
import { AvatarDefault, AvatarSize } from "@/app/docs/components/avatar/demos";
import {
  ButtonDefault,
  ButtonDisabled,
  ButtonLoading,
  ButtonPopupTrigger,
  ButtonSize,
  ButtonVariant,
} from "@/app/docs/components/button/demos";
import {
  CheckboxGroupDefault,
  CheckboxGroupDisabled,
  CheckboxGroupParent,
} from "@/app/docs/components/checkbox-group/demos";
import {
  CheckboxDefault,
  CheckboxDisabled,
  CheckboxIndeterminate,
  CheckboxInvalid,
  CheckboxReadonly,
  CheckboxSiblingLabel,
  CheckboxSize,
} from "@/app/docs/components/checkbox/demos";
import {
  CollapsibleDefault,
  CollapsibleDisabled,
  CollapsibleHiddenUntilFound,
} from "@/app/docs/components/collapsible/demos";
import {
  ComboboxDefault,
  ComboboxDisabled,
  ComboboxDisabledItem,
  ComboboxGrid,
  ComboboxGrouped,
  ComboboxInputDemo,
  ComboboxInvalid,
  ComboboxMultiple,
  ComboboxReadonly,
  ComboboxSize,
} from "@/app/docs/components/combobox/demos";
import {
  ContextMenuDefault,
  ContextMenuItems,
  ContextMenuNested,
} from "@/app/docs/components/context-menu/demos";
import {
  DialogDefault,
  DialogInnerScroll,
  DialogNested,
  DialogOuterScroll,
} from "@/app/docs/components/dialog/demos";
import Drawer01 from "@/app/docs/components/drawer/demos/drawer-01";
import { FieldDefault, FieldDisabled } from "@/app/docs/components/field/demos";
import {
  FieldsetDefault,
  FieldsetDisabled,
} from "@/app/docs/components/fieldset/demos";
import Form01 from "@/app/docs/components/form/demos/form-01";
import {
  InputDefault,
  InputDisabled,
  InputInvalid,
  InputSize,
} from "@/app/docs/components/input/demos";
import Label01 from "@/app/docs/components/label/demos/label-01";
import Menu01 from "@/app/docs/components/menu/demos/menu-01";
import Menubar01 from "@/app/docs/components/menubar/demos/menubar-01";
import Meter01 from "@/app/docs/components/meter/demos/meter-01";
import NavigationMenu01 from "@/app/docs/components/navigation-menu/demos/navigation-menu-01";
import {
  NumberFieldDefault,
  NumberFieldDisabled,
  NumberFieldInvalid,
  NumberFieldSize,
  NumberFieldWithoutButtons,
  NumberFieldWithoutDecrement,
  NumberFieldWithoutIncrement,
} from "@/app/docs/components/number-field/demos";
import OTPField01 from "@/app/docs/components/otp-field/demos/otp-field-01";
import Popover01 from "@/app/docs/components/popover/demos/popover-01";
import PreviewCard01 from "@/app/docs/components/preview-card/demos/preview-card-01";
import Progress01 from "@/app/docs/components/progress/demos/progress-01";
import {
  RadioGroupDefault,
  RadioGroupDisabled,
  RadioGroupInvalid,
  RadioGroupReadonly,
  RadioGroupSiblingLabel,
  RadioGroupSize,
} from "@/app/docs/components/radio-group/demos";
import {
  ScrollAreaBoth,
  ScrollAreaDefault,
  ScrollAreaFaded,
} from "@/app/docs/components/scroll-area/demos";
import {
  SelectDefault,
  SelectDisabled,
  SelectDisabledItem,
  SelectGrouped,
  SelectInvalid,
  SelectMultiple,
  SelectObject,
  SelectReadonly,
  SelectSize,
} from "@/app/docs/components/select/demos";
import { SeparatorDefault } from "@/app/docs/components/separator/demos";
import {
  SliderDefault,
  SliderDisabled,
  SliderSize,
  SliderVertical,
} from "@/app/docs/components/slider/demos";
import {
  SwitchDefault,
  SwitchDisabled,
  SwitchIcon,
  SwitchInvalid,
  SwitchReadonly,
  SwitchSiblingLabel,
  SwitchSize,
} from "@/app/docs/components/switch/demos";
import {
  TabsAnimated,
  TabsDefault,
  TabsDisabled,
  TabsSize,
  TabsVariant,
  TabsVertical,
} from "@/app/docs/components/tabs/demos";
import Toast01 from "@/app/docs/components/toast/demos/toast-01";
import ToggleGroup01 from "@/app/docs/components/toggle-group/demos/toggle-group-01";
import {
  ToggleDefault,
  ToggleDisabled,
  ToggleIcon,
  TogglePressed,
  ToggleSize,
} from "@/app/docs/components/toggle/demos";
import Toolbar01 from "@/app/docs/components/toolbar/demos/toolbar-01";
import Tooltip01 from "@/app/docs/components/tooltip/demos/tooltip-01";

import { DemoCode } from "../code/demo-code";
import { DemoViewportFrame } from "./demo-viewport-frame";

const demoRegistry = {
  "accordion-default": AccordionDefault,
  "accordion-additional-icon": AccordionAdditionalIcon,
  "accordion-root-disabled": AccordionRootDisabled,
  "accordion-item-disabled": AccordionItemDisabled,
  "alert-dialog-default": AlertDialogDefault,
  "alert-dialog-detached-triggers": AlertDialogDetachedTriggers,
  "alert-dialog-inner-scroll": AlertDialogInnerScroll,
  "alert-dialog-nested": AlertDialogNested,
  "autocomplete-default": AutocompleteDefault,
  "autocomplete-input": AutocompleteInputDemo,
  "autocomplete-invalid": AutocompleteInvalid,
  "autocomplete-disabled": AutocompleteDisabled,
  "autocomplete-disabled-item": AutocompleteDisabledItem,
  "autocomplete-readonly": AutocompleteReadonly,
  "autocomplete-grouped": AutocompleteGrouped,
  "autocomplete-grid": AutocompleteGrid,
  "autocomplete-size": AutocompleteSize,
  "autocomplete-command-palette": AutocompleteCommandPalette,
  "avatar-default": AvatarDefault,
  "avatar-size": AvatarSize,
  "button-default": ButtonDefault,
  "button-variant": ButtonVariant,
  "button-size": ButtonSize,
  "button-loading": ButtonLoading,
  "button-disabled": ButtonDisabled,
  "button-popup-trigger": ButtonPopupTrigger,
  "checkbox-default": CheckboxDefault,
  "checkbox-size": CheckboxSize,
  "checkbox-invalid": CheckboxInvalid,
  "checkbox-disabled": CheckboxDisabled,
  "checkbox-readonly": CheckboxReadonly,
  "checkbox-indeterminate": CheckboxIndeterminate,
  "checkbox-sibling-label": CheckboxSiblingLabel,
  "checkbox-group-default": CheckboxGroupDefault,
  "checkbox-group-parent": CheckboxGroupParent,
  "checkbox-group-disabled": CheckboxGroupDisabled,
  "collapsible-default": CollapsibleDefault,
  "collapsible-disabled": CollapsibleDisabled,
  "collapsible-hidden-until-found": CollapsibleHiddenUntilFound,
  "combobox-default": ComboboxDefault,
  "combobox-multiple": ComboboxMultiple,
  "combobox-input": ComboboxInputDemo,
  "combobox-grouped": ComboboxGrouped,
  "combobox-grid": ComboboxGrid,
  "combobox-invalid": ComboboxInvalid,
  "combobox-disabled": ComboboxDisabled,
  "combobox-disabled-item": ComboboxDisabledItem,
  "combobox-readonly": ComboboxReadonly,
  "combobox-size": ComboboxSize,
  "context-menu-default": ContextMenuDefault,
  "context-menu-items": ContextMenuItems,
  "context-menu-nested": ContextMenuNested,
  "dialog-default": DialogDefault,
  "dialog-inner-scroll": DialogInnerScroll,
  "dialog-nested": DialogNested,
  "dialog-outer-scroll": DialogOuterScroll,
  "drawer-01": Drawer01,
  "field-default": FieldDefault,
  "field-disabled": FieldDisabled,
  "fieldset-default": FieldsetDefault,
  "fieldset-disabled": FieldsetDisabled,
  "form-01": Form01,
  "input-default": InputDefault,
  "input-size": InputSize,
  "input-invalid": InputInvalid,
  "input-disabled": InputDisabled,
  "label-01": Label01,
  "menu-01": Menu01,
  "menubar-01": Menubar01,
  "meter-01": Meter01,
  "navigation-menu-01": NavigationMenu01,
  "number-field-default": NumberFieldDefault,
  "number-field-disabled": NumberFieldDisabled,
  "number-field-invalid": NumberFieldInvalid,
  "number-field-size": NumberFieldSize,
  "number-field-without-decrement": NumberFieldWithoutDecrement,
  "number-field-without-increment": NumberFieldWithoutIncrement,
  "number-field-without-buttons": NumberFieldWithoutButtons,
  "otp-field-01": OTPField01,
  "popover-01": Popover01,
  "preview-card-01": PreviewCard01,
  "progress-01": Progress01,
  "radio-group-default": RadioGroupDefault,
  "radio-group-sibling-label": RadioGroupSiblingLabel,
  "radio-group-size": RadioGroupSize,
  "radio-group-invalid": RadioGroupInvalid,
  "radio-group-disabled": RadioGroupDisabled,
  "radio-group-readonly": RadioGroupReadonly,
  "scroll-area-both": ScrollAreaBoth,
  "scroll-area-default": ScrollAreaDefault,
  "scroll-area-faded": ScrollAreaFaded,
  "select-default": SelectDefault,
  "select-size": SelectSize,
  "select-multiple": SelectMultiple,
  "select-object": SelectObject,
  "select-grouped": SelectGrouped,
  "select-invalid": SelectInvalid,
  "select-disabled": SelectDisabled,
  "select-disabled-item": SelectDisabledItem,
  "select-readonly": SelectReadonly,
  "separator-default": SeparatorDefault,
  "slider-default": SliderDefault,
  "slider-vertical": SliderVertical,
  "slider-size": SliderSize,
  "slider-disabled": SliderDisabled,
  "switch-default": SwitchDefault,
  "switch-sibling-label": SwitchSiblingLabel,
  "switch-size": SwitchSize,
  "switch-invalid": SwitchInvalid,
  "switch-disabled": SwitchDisabled,
  "switch-icon": SwitchIcon,
  "switch-readonly": SwitchReadonly,
  "tabs-default": TabsDefault,
  "tabs-variant": TabsVariant,
  "tabs-size": TabsSize,
  "tabs-vertical": TabsVertical,
  "tabs-animated": TabsAnimated,
  "tabs-disabled": TabsDisabled,
  "toast-01": Toast01,
  "toggle-default": ToggleDefault,
  "toggle-disabled": ToggleDisabled,
  "toggle-icon": ToggleIcon,
  "toggle-pressed": TogglePressed,
  "toggle-size": ToggleSize,
  "toggle-group-01": ToggleGroup01,
  "toolbar-01": Toolbar01,
  "tooltip-01": Tooltip01,
} satisfies Record<string, () => ReactNode>;

type DemoPath = keyof typeof demoRegistry;

function parseDemoPath(raw: string): DemoPath {
  const keys = Object.keys(demoRegistry) as DemoPath[];

  for (const key of keys) {
    if (key === raw) {
      return key;
    }
  }

  throw new Error(
    `Unknown component "${raw}". Known keys: ${keys.join(", ")}. Add a static import and a key on demoRegistry in app/markdoc/tags/component-demo.tsx.`,
  );
}

export function ComponentDemo({
  component,
  showViewport = false,
}: {
  component: string;
  showViewport?: boolean;
}) {
  const key = parseDemoPath(component);
  const Demo = demoRegistry[key];

  return (
    <figure className="mx-auto my-2 w-full overflow-hidden rounded-md border border-border **:data-[slot=code-block]:rounded-none **:data-[slot=code-block]:border-0">
      <div className="flex w-full flex-col items-center justify-center p-6 *:data-[slot=demo-viewport]:w-full">
        {showViewport ? (
          <DemoViewportFrame>
            <Demo />
          </DemoViewportFrame>
        ) : (
          <Demo />
        )}
      </div>
      <div className="w-full border-t border-border">
        <DemoCode demoKey={key} />
      </div>
    </figure>
  );
}
