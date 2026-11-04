import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/registry/sector23/ui/slider";

export function SliderSteps() {
  return (
    <Slider
      defaultValue={400}
      min={100}
      max={900}
      step={100}
      largeStep={200}
      className="w-52"
    >
      <SliderLabel>Font weight</SliderLabel>
      <SliderValue />
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb />
        </SliderTrack>
      </SliderControl>
    </Slider>
  );
}
