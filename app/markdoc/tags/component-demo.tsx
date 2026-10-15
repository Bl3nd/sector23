import type { ReactNode } from "react";

import {
  AccordionDefault,
  AccordionHiddenUntilFound,
  AccordionItemDisabled,
  AccordionMultiple,
  AccordionRootDisabled,
} from "@/app/docs/components/accordion/demos";
import { AlertDialogDefault } from "@/app/docs/components/alert-dialog/demos";
import {
  AutocompleteDefault,
  AutocompleteDisabled,
  AutocompleteInputDemo,
  AutocompleteReadonly,
} from "@/app/docs/components/autocomplete/demos";
import { AvatarDefault } from "@/app/docs/components/avatar/demos";
import {
  ButtonDefault,
  ButtonLoading,
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
  CheckboxReadonly,
} from "@/app/docs/components/checkbox/demos";
import { CollapsibleDefault } from "@/app/docs/components/collapsible/demos";
import {
  ComboboxDefault,
  ComboboxInputDemo,
  ComboboxMultiple,
} from "@/app/docs/components/combobox/demos";
import ContextMenu01 from "@/app/docs/components/context-menu/demos/context-menu-01";
import Dialog01 from "@/app/docs/components/dialog/demos/dialog-01";
import Drawer01 from "@/app/docs/components/drawer/demos/drawer-01";
import Field01 from "@/app/docs/components/field/demos/field-01";
import Fieldset01 from "@/app/docs/components/fieldset/demos/fieldset-01";
import Form01 from "@/app/docs/components/form/demos/form-01";
import Input01 from "@/app/docs/components/input/demos/input-01";
import Label01 from "@/app/docs/components/label/demos/label-01";
import Menu01 from "@/app/docs/components/menu/demos/menu-01";
import Menubar01 from "@/app/docs/components/menubar/demos/menubar-01";
import Meter01 from "@/app/docs/components/meter/demos/meter-01";
import NavigationMenu01 from "@/app/docs/components/navigation-menu/demos/navigation-menu-01";
import NumberField01 from "@/app/docs/components/number-field/demos/number-field-01";
import OTPField01 from "@/app/docs/components/otp-field/demos/otp-field-01";
import Popover01 from "@/app/docs/components/popover/demos/popover-01";
import PreviewCard01 from "@/app/docs/components/preview-card/demos/preview-card-01";
import Progress01 from "@/app/docs/components/progress/demos/progress-01";
import RadioGroup01 from "@/app/docs/components/radio-group/demos/radio-group-01";
import ScrollArea01 from "@/app/docs/components/scroll-area/demos/scroll-area-01";
import Select01 from "@/app/docs/components/select/demos/select-01";
import Separator01 from "@/app/docs/components/separator/demos/separator-01";
import Slider01 from "@/app/docs/components/slider/demos/slider-01";
import Switch01 from "@/app/docs/components/switch/demos/switch-01";
import Tabs01 from "@/app/docs/components/tabs/demos/tabs-01";
import Toast01 from "@/app/docs/components/toast/demos/toast-01";
import ToggleGroup01 from "@/app/docs/components/toggle-group/demos/toggle-group-01";
import Toggle01 from "@/app/docs/components/toggle/demos/toggle-01";
import Toolbar01 from "@/app/docs/components/toolbar/demos/toolbar-01";
import Tooltip01 from "@/app/docs/components/tooltip/demos/tooltip-01";

import { DemoViewportFrame } from "./demo-viewport-frame";

const demoRegistry = {
  "accordion-default": AccordionDefault,
  "accordion-multiple": AccordionMultiple,
  "accordion-huf": AccordionHiddenUntilFound,
  "accordion-root-disabled": AccordionRootDisabled,
  "accordion-item-disabled": AccordionItemDisabled,
  "alert-dialog-default": AlertDialogDefault,
  "autocomplete-default": AutocompleteDefault,
  "autocomplete-input": AutocompleteInputDemo,
  "autocomplete-disabled": AutocompleteDisabled,
  "autocomplete-readonly": AutocompleteReadonly,
  "avatar-default": AvatarDefault,
  "button-default": ButtonDefault,
  "button-variant": ButtonVariant,
  "button-size": ButtonSize,
  "button-loading": ButtonLoading,
  "checkbox-default": CheckboxDefault,
  "checkbox-disabled": CheckboxDisabled,
  "checkbox-readonly": CheckboxReadonly,
  "checkbox-group-default": CheckboxGroupDefault,
  "checkbox-group-parent": CheckboxGroupParent,
  "checkbox-group-disabled": CheckboxGroupDisabled,
  "collapsible-default": CollapsibleDefault,
  "combobox-default": ComboboxDefault,
  "combobox-multiple": ComboboxMultiple,
  "combobox-input": ComboboxInputDemo,
  "context-menu-01": ContextMenu01,
  "dialog-01": Dialog01,
  "drawer-01": Drawer01,
  "field-01": Field01,
  "fieldset-01": Fieldset01,
  "form-01": Form01,
  "input-01": Input01,
  "label-01": Label01,
  "menu-01": Menu01,
  "menubar-01": Menubar01,
  "meter-01": Meter01,
  "navigation-menu-01": NavigationMenu01,
  "number-field-01": NumberField01,
  "otp-field-01": OTPField01,
  "popover-01": Popover01,
  "preview-card-01": PreviewCard01,
  "progress-01": Progress01,
  "radio-group-01": RadioGroup01,
  "scroll-area-01": ScrollArea01,
  "select-01": Select01,
  "separator-01": Separator01,
  "slider-01": Slider01,
  "switch-01": Switch01,
  "tabs-01": Tabs01,
  "toast-01": Toast01,
  "toggle-01": Toggle01,
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
  const Demo = demoRegistry[parseDemoPath(component)];

  return (
    <>
      {showViewport ? (
        <DemoViewportFrame>
          <Demo />
        </DemoViewportFrame>
      ) : (
        <div className="mx-auto flex w-full flex-col items-center justify-center rounded-md border border-border p-6">
          <Demo />
        </div>
      )}
    </>
  );
}
