import { Meter as BaseMeter } from "@base-ui/react/meter";

function Meter({ className, ...props }: BaseMeter.Root.Props) {
  return <BaseMeter.Root data-slot="meter" className={className} {...props} />;
}

function MeterLabel({ className, ...props }: BaseMeter.Label.Props) {
  return <BaseMeter.Label data-slot="meter-label" className={className} {...props} />;
}

function MeterTrack({ className, ...props }: BaseMeter.Track.Props) {
  return <BaseMeter.Track data-slot="meter-track" className={className} {...props} />;
}

function MeterIndicator({ className, ...props }: BaseMeter.Indicator.Props) {
  return <BaseMeter.Indicator data-slot="meter-indicator" className={className} {...props} />;
}

function MeterValue({ className, ...props }: BaseMeter.Value.Props) {
  return <BaseMeter.Value data-slot="meter-value" className={className} {...props} />;
}

export { Meter, MeterLabel, MeterTrack, MeterIndicator, MeterValue };
