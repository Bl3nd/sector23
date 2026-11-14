"use client";

import type { LucideIcon } from "lucide-react";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/registry/sector23/ui/toggle";
import { ToggleGroup } from "@/registry/sector23/ui/toggle-group";
import {
  createTooltipHandle,
  Tooltip,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
  TooltipViewport,
} from "@/registry/sector23/ui/tooltip";

interface Format {
  name: string;
  label: string;
  icon: LucideIcon;
}

const formats: readonly Format[] = [
  { name: "Bold", label: "Bold", icon: BoldIcon },
  { name: "Italic", label: "Italic text", icon: ItalicIcon },
  {
    name: "Underline",
    label: "Underline the selected text",
    icon: UnderlineIcon,
  },
];

const handle = createTooltipHandle<Format>();

export function TooltipViewportDemo() {
  return (
    <TooltipProvider>
      <ToggleGroup>
        {formats.map((format) => (
          <TooltipTrigger
            key={format.name}
            handle={handle}
            payload={format}
            render={<Toggle />}
            aria-label={format.name}
          >
            <format.icon />
          </TooltipTrigger>
        ))}
      </ToggleGroup>
      <Tooltip handle={handle}>
        {({ payload }) => (
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>
                <TooltipArrow />
                <TooltipViewport>
                  {formats.find((format) => format === payload)?.label ?? ""}
                </TooltipViewport>
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
