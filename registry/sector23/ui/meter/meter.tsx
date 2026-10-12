"use client";

import { useDirection } from "@base-ui/react";
import { Meter as BaseMeter } from "@base-ui/react/meter";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { meter } from "./meter.style";

function Meter({ className, ...props }: BaseMeter.Root.Props) {
  const direction = useDirection();

  return (
    <BaseMeter.Root
      data-slot="meter"
      className={mergeSlotClassName(meter().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function MeterLabel({ className, ...props }: BaseMeter.Label.Props) {
  return (
    <BaseMeter.Label
      data-slot="meter-label"
      className={mergeSlotClassName(meter().label, className)}
      {...props}
    />
  );
}

function MeterTrack({ className, ...props }: BaseMeter.Track.Props) {
  return (
    <BaseMeter.Track
      data-slot="meter-track"
      className={mergeSlotClassName(meter().track, className)}
      {...props}
    />
  );
}

function MeterIndicator({ className, ...props }: BaseMeter.Indicator.Props) {
  return (
    <BaseMeter.Indicator
      data-slot="meter-indicator"
      className={mergeSlotClassName(meter().indicator, className)}
      {...props}
    />
  );
}

function MeterValue({ className, ...props }: BaseMeter.Value.Props) {
  return (
    <BaseMeter.Value
      data-slot="meter-value"
      className={mergeSlotClassName(meter().value, className)}
      {...props}
    />
  );
}

export { Meter, MeterLabel, MeterTrack, MeterIndicator, MeterValue };
