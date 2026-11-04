import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@/registry/sector23/ui/slider";

const MIN = 0;
const MAX = 100;
const MARKS = [0, 25, 50, 75, 100];

export function SliderMarks() {
  return (
    <Slider defaultValue={50} min={MIN} max={MAX} step={25} className="w-52">
      <SliderLabel>Gain</SliderLabel>
      <SliderValue />
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          {MARKS.map((mark) => (
            <span
              key={mark}
              aria-hidden
              className="absolute top-1/2 h-2 w-px -translate-x-1/2 -translate-y-1/2 bg-foreground/70"
              style={{ left: `${valueToPercent(mark)}%` }}
            />
          ))}
          <SliderThumb />
        </SliderTrack>
      </SliderControl>
      <div
        aria-hidden
        className="relative col-span-2 h-4 text-xs text-muted-foreground"
      >
        {MARKS.map((mark) => (
          <span
            key={mark}
            className="absolute -translate-x-1/2"
            style={{ left: `${valueToPercent(mark)}%` }}
          >
            {mark}
          </span>
        ))}
      </div>
    </Slider>
  );
}

function valueToPercent(value: number) {
  return ((value - MIN) / (MAX - MIN)) * 100;
}
