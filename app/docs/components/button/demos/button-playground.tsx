"use client";

import type { ComponentProps, ReactElement } from "react";

import { UserIcon } from "lucide-react";

import {
  choice,
  DemoPlayground,
  toggle,
  type ControlSchema,
  type ControlValues,
} from "@/app/components/docs/demo-playground";
import { Button } from "@/registry/sector23/ui/button";
import { type button } from "@/registry/sector23/ui/button/button.style";

type ButtonVariant = keyof typeof button.variants.variant;
type ButtonSize = keyof typeof button.variants.size;

const VARIANT_LABELS = {
  primary: "Primary",
  secondary: "Secondary",
  destructive: "Destructive",
  outline: "Outline",
  ghost: "Ghost",
  "ghost-emphasized": "Ghost emphasized",
} as const satisfies Record<ButtonVariant, string>;

const SIZE_LABELS = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
} as const satisfies Record<ButtonSize, string>;

const CONTENT_LABELS = {
  text: "Text",
  "icon-left": "Icon left",
  "icon-right": "Icon right",
  "icon-only": "Icon only",
} as const;

const BUTTON_LABEL = "Click me";

const buttonControls = {
  size: choice("Size", SIZE_LABELS, "md"),
  variant: choice("Variant", VARIANT_LABELS, "primary"),
  content: choice("Content", CONTENT_LABELS, "icon-left"),
  disabled: toggle("Disabled"),
} satisfies ControlSchema;

type ButtonDemoValues = ControlValues<typeof buttonControls>;

type ButtonDemoProps = Pick<
  ComponentProps<typeof Button>,
  "variant" | "size" | "disabled" | "children" | "aria-label"
>;

function buttonProps({
  size,
  variant,
  content,
  disabled,
}: ButtonDemoValues): ButtonDemoProps {
  const base = { size, variant, disabled };

  switch (content) {
    case "text": {
      return { ...base, children: BUTTON_LABEL };
    }
    case "icon-left": {
      return {
        ...base,
        children: (
          <>
            <UserIcon aria-hidden />
            {BUTTON_LABEL}
          </>
        ),
      };
    }
    case "icon-right": {
      return {
        ...base,
        children: (
          <>
            {BUTTON_LABEL}
            <UserIcon aria-hidden />
          </>
        ),
      };
    }
    case "icon-only": {
      return {
        ...base,
        "aria-label": BUTTON_LABEL,
        children: <UserIcon aria-hidden />,
      };
    }
    default: {
      return content satisfies never;
    }
  }
}

function ButtonPlayground(): ReactElement {
  return (
    <DemoPlayground controls={buttonControls}>
      {(values) => <Button {...buttonProps(values)} />}
    </DemoPlayground>
  );
}

export { ButtonPlayground };
