import { Slider as BaseSlider } from "@base-ui/react/slider";

function Slider({ className, ...props }: BaseSlider.Root.Props) {
  return <BaseSlider.Root data-slot="slider" className={className} {...props} />;
}

function SliderLabel({ className, ...props }: BaseSlider.Label.Props) {
  return <BaseSlider.Label data-slot="slider-label" className={className} {...props} />;
}

function SliderValue({ className, ...props }: BaseSlider.Value.Props) {
  return <BaseSlider.Value data-slot="slider-value" className={className} {...props} />;
}

function SliderControl({ className, ...props }: BaseSlider.Control.Props) {
  return <BaseSlider.Control data-slot="slider-control" className={className} {...props} />;
}

function SliderTrack({ className, ...props }: BaseSlider.Track.Props) {
  return <BaseSlider.Track data-slot="slider-track" className={className} {...props} />;
}

function SliderIndicator({ className, ...props }: BaseSlider.Indicator.Props) {
  return <BaseSlider.Indicator data-slot="slider-indicator" className={className} {...props} />;
}

function SliderThumb({ className, ...props }: BaseSlider.Thumb.Props) {
  return <BaseSlider.Thumb data-slot="slider-thumb" className={className} {...props} />;
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
