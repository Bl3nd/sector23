"use client";

import { useDirection } from "@base-ui/react";
import { Progress as BaseProgress } from "@base-ui/react/progress";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { progress } from "./progress.style";

function Progress({ className, ...props }: BaseProgress.Root.Props) {
  const direction = useDirection();

  return (
    <BaseProgress.Root
      data-slot="progress"
      className={mergeSlotClassName(progress().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function ProgressLabel({ className, ...props }: BaseProgress.Label.Props) {
  return (
    <BaseProgress.Label
      data-slot="progress-label"
      className={mergeSlotClassName(progress().label, className)}
      {...props}
    />
  );
}

function ProgressTrack({ className, ...props }: BaseProgress.Track.Props) {
  return (
    <BaseProgress.Track
      data-slot="progress-track"
      className={mergeSlotClassName(progress().track, className)}
      {...props}
    />
  );
}

function ProgressIndicator({ className, ...props }: BaseProgress.Indicator.Props) {
  return (
    <BaseProgress.Indicator
      data-slot="progress-indicator"
      className={mergeSlotClassName(progress().indicator, className)}
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: BaseProgress.Value.Props) {
  return (
    <BaseProgress.Value
      data-slot="progress-value"
      className={mergeSlotClassName(progress().value, className)}
      {...props}
    />
  );
}

export { Progress, ProgressLabel, ProgressTrack, ProgressIndicator, ProgressValue };
