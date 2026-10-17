"use client";

import { SlidersHorizontalIcon, XIcon } from "lucide-react";
import { useId, useState, type ReactElement, type ReactNode } from "react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerPopup,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "@/registry/sector23/ui/drawer";
import { Label } from "@/registry/sector23/ui/label";
import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "@/registry/sector23/ui/select";
import { Switch, SwitchThumb } from "@/registry/sector23/ui/switch";
import { Toggle } from "@/registry/sector23/ui/toggle";
import { ToggleGroup } from "@/registry/sector23/ui/toggle-group";

import type {
  ChoiceControl,
  ControlSchema,
  ControlValues,
  ToggleControl,
} from "./controls";

import {
  choiceItems,
  controlWidget,
  defaultValues,
  parseSegmentedChange,
  parseSelectChange,
  setControl,
} from "./controls";

type PanelValues = Readonly<Record<string, string | boolean>>;

interface DemoPlaygroundProps<S extends ControlSchema> {
  readonly controls: S;
  readonly children: (values: ControlValues<S>) => ReactNode;
}

function DemoPlayground<S extends ControlSchema>({
  controls,
  children,
}: DemoPlaygroundProps<S>): ReactElement {
  const [values, setValues] = useState(() => defaultValues(controls));

  const panel = (
    <ControlPanel
      controls={controls}
      values={values}
      onChange={(key, next) =>
        setValues((current) =>
          setControl(
            current,
            key as keyof ControlValues<S>,
            next as ControlValues<S>[keyof S],
          ),
        )
      }
    />
  );

  return (
    <div className="-m-6 flex w-[calc(100%+3rem)] shrink-0 items-stretch">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
        {children(values)}
        <Drawer swipeDirection="right">
          <DrawerTrigger
            render={<Button variant="outline" />}
            className="sm:hidden"
          >
            <SlidersHorizontalIcon />
            Controls
          </DrawerTrigger>
          <DrawerPortal>
            <DrawerBackdrop className="sm:hidden" />
            <DrawerViewport className="sm:hidden">
              <DrawerPopup className="sm:hidden">
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Controls</DrawerTitle>
                    <DrawerClose
                      render={<Button variant="ghost" />}
                      aria-label="Close controls"
                    >
                      <XIcon />
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto">
                    {panel}
                  </div>
                </DrawerContent>
              </DrawerPopup>
            </DrawerViewport>
          </DrawerPortal>
        </Drawer>
      </div>
      <aside
        aria-label="Demo controls"
        className="hidden w-64 shrink-0 flex-col gap-4 border-s border-border p-4 sm:flex"
      >
        {panel}
      </aside>
    </div>
  );
}

interface ControlPanelProps {
  readonly controls: ControlSchema;
  readonly values: PanelValues;
  readonly onChange: (key: string, next: string | boolean) => void;
}

function ControlPanel({
  controls,
  values,
  onChange,
}: ControlPanelProps): ReactElement {
  const panelId = useId();

  return (
    <>
      {Object.entries(controls).map(([key, control]) => {
        const value = values[key];
        const id = `${panelId}-${key}`;

        if (control.kind === "toggle" && typeof value === "boolean") {
          return (
            <SwitchField
              key={key}
              control={control}
              value={value}
              onChange={(next) => onChange(key, next)}
            />
          );
        }

        if (control.kind === "choice" && typeof value === "string") {
          const Field =
            controlWidget(control) === "segmented"
              ? SegmentedField
              : SelectField;

          return (
            <Field
              key={key}
              id={id}
              control={control}
              value={value}
              onChange={(next) => onChange(key, next)}
            />
          );
        }

        throw new Error(`Control "${key}" has no matching value.`);
      })}
    </>
  );
}

interface ChoiceFieldProps {
  readonly id: string;
  readonly control: ChoiceControl<string>;
  readonly value: string;
  readonly onChange: (next: string) => void;
}

function SegmentedField({
  id,
  control,
  value,
  onChange,
}: ChoiceFieldProps): ReactElement {
  return (
    <div className="flex flex-col gap-1.5">
      <span id={id} className="text-sm font-medium text-foreground">
        {control.label}
      </span>
      <ToggleGroup
        aria-labelledby={id}
        className="flex-wrap"
        value={[value]}
        onValueChange={(groupValue) =>
          onChange(parseSegmentedChange(control, groupValue, value))
        }
      >
        {choiceItems(control).map((item) => (
          <Toggle key={item.value} value={item.value} className="w-auto px-2">
            {item.label}
          </Toggle>
        ))}
      </ToggleGroup>
    </div>
  );
}

function SelectField({
  control,
  value,
  onChange,
}: ChoiceFieldProps): ReactElement {
  const items = choiceItems(control);

  return (
    <Select
      items={items}
      value={value}
      onValueChange={(selected) =>
        onChange(parseSelectChange(control, selected, value))
      }
    >
      <div className="flex flex-col gap-1.5">
        <SelectLabel>{control.label}</SelectLabel>
        <SelectTrigger>
          <SelectValue />
          <SelectIcon />
        </SelectTrigger>
      </div>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectList>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <SelectItemText>{item.label}</SelectItemText>
                  <SelectItemIndicator />
                </SelectItem>
              ))}
            </SelectList>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </Select>
  );
}

interface SwitchFieldProps {
  readonly control: ToggleControl;
  readonly value: boolean;
  readonly onChange: (next: boolean) => void;
}

function SwitchField({
  control,
  value,
  onChange,
}: SwitchFieldProps): ReactElement {
  return (
    <Label className="flex items-center gap-2">
      <Switch checked={value} onCheckedChange={onChange}>
        <SwitchThumb />
      </Switch>
      {control.label}
    </Label>
  );
}

export { DemoPlayground };
