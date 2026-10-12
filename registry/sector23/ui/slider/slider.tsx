"use client";

import { useDirection } from "@base-ui/react";
import { Slider as BaseSlider } from "@base-ui/react/slider";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { slider } from "./slider.style";

function Slider({ className, ...props }: BaseSlider.Root.Props) {
  const direction = useDirection();

  return (
    <BaseSlider.Root
      data-slot="slider"
      className={mergeSlotClassName(slider().root, className)}
      {...props}
      dir={direction}
    />
  );
}

function SliderLabel({ className, ...props }: BaseSlider.Label.Props) {
  return (
    <BaseSlider.Label
      data-slot="slider-label"
      className={mergeSlotClassName(slider().label, className)}
      {...props}
    />
  );
}

function SliderValue({ className, ...props }: BaseSlider.Value.Props) {
  return (
    <BaseSlider.Value
      data-slot="slider-value"
      className={mergeSlotClassName(slider().value, className)}
      {...props}
    />
  );
}

function SliderControl({ className, ...props }: BaseSlider.Control.Props) {
  return (
    <BaseSlider.Control
      data-slot="slider-control"
      className={mergeSlotClassName(slider().control, className)}
      {...props}
    />
  );
}

function SliderTrack({ className, ...props }: BaseSlider.Track.Props) {
  return (
    <BaseSlider.Track
      data-slot="slider-track"
      className={mergeSlotClassName(slider().track, className)}
      {...props}
    />
  );
}

function SliderIndicator({ className, ...props }: BaseSlider.Indicator.Props) {
  return (
    <BaseSlider.Indicator
      data-slot="slider-indicator"
      className={mergeSlotClassName(slider().indicator, className)}
      {...props}
    />
  );
}

function SliderThumb({ className, ...props }: BaseSlider.Thumb.Props) {
  return (
    <BaseSlider.Thumb
      data-slot="slider-thumb"
      className={mergeSlotClassName(slider().thumb, className)}
      {...props}
    />
  );
}

export {
  Slider,
  SliderLabel,
  SliderValue,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
};
