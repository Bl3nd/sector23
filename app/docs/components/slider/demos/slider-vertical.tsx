import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
} from "@/registry/sector23/ui/slider";

export function SliderVertical() {
  return (
    <Slider orientation="vertical" defaultValue={35} className="h-48 w-fit">
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="Level" />
        </SliderTrack>
      </SliderControl>
    </Slider>
  );
}
