import { Toggle } from "@/registry/sector23/ui/toggle";

export function TogglePressed() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle defaultPressed>Pressed</Toggle>
      <Toggle>Released</Toggle>
    </div>
  );
}
