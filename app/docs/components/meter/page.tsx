import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@/app/components/meter";

export default function MeterPage() {
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
