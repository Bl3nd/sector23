import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/registry/sector23/ui/slider";

export default function Slider01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Slider defaultValue={25} className="w-52">
        <SliderLabel>Volume</SliderLabel>
        <SliderValue />
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </div>
  );
}
