import { Field } from "@/registry/sector23/ui/field";
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/registry/sector23/ui/slider";

export function SliderInvalid() {
  return (
    <Field name="volume" invalid>
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
    </Field>
  );
}
