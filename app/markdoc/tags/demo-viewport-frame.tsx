"use client";

import { useState, type ReactNode } from "react";
import { MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react";

import { Toggle } from "@/app/components/toggle";
import { ToggleGroup } from "@/app/components/toggle-group";

const VIEWPORT_FRAMES = {
  mobile: { label: "Mobile", maxWidth: "390px", Icon: SmartphoneIcon },
  tablet: { label: "Tablet", maxWidth: "768px", Icon: TabletIcon },
  desktop: { label: "Desktop", maxWidth: "100%", Icon: MonitorIcon },
} as const;

const STAGE_HATCH =
  "repeating-linear-gradient(-45deg, transparent, transparent 6px, var(--border) 6px, var(--border) 7px)";

type Viewport = keyof typeof VIEWPORT_FRAMES;

function parseViewportChange(groupValue: readonly string[], current: Viewport): Viewport {
  const [next, extra] = groupValue;

  if (next === undefined) {
    // Base UI's single-select toggle group emits [] when the pressed item is pressed again, so empty is not a viewport and must not be stored.
    return current;
  }

  if (extra === undefined && Object.hasOwn(VIEWPORT_FRAMES, next)) {
    return next as Viewport;
  }

  throw new Error(`Expected one viewport, received ${JSON.stringify(groupValue)}.`);
}

export interface DemoViewportFrameProps {
  children: ReactNode;
}

export function DemoViewportFrame({ children }: DemoViewportFrameProps) {
  const [viewport, setViewport] = useState<Viewport>("mobile");

  return (
    <div
      data-slot="demo-viewport"
      className="flex flex-col gap-2 rounded-md border border-border p-2"
    >
      <ToggleGroup
        aria-label="Demo viewport"
        value={[viewport]}
        onValueChange={(groupValue) => setViewport(parseViewportChange(groupValue, viewport))}
      >
        {(Object.keys(VIEWPORT_FRAMES) as Viewport[]).map((id) => {
          const { label, Icon } = VIEWPORT_FRAMES[id];

          return (
            <Toggle key={id} value={id} aria-label={label}>
              <Icon aria-hidden />
            </Toggle>
          );
        })}
      </ToggleGroup>
      <div
        data-slot="demo-viewport-stage"
        className="w-full"
        style={{ backgroundImage: STAGE_HATCH }}
      >
        <div
          data-slot="demo-viewport-frame"
          data-viewport={viewport}
          className="w-full bg-background"
          style={{ maxWidth: VIEWPORT_FRAMES[viewport].maxWidth }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
