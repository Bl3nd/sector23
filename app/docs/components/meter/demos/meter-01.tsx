import {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
} from "@/registry/sector23/ui/meter";

export default function Meter01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Meter value={35} className="w-56">
        <MeterLabel>Storage Usage</MeterLabel>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </Meter>
    </div>
  );
}
