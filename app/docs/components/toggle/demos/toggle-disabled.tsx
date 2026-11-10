import { Toggle } from "@/registry/sector23/ui/toggle";

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle disabled>Released</Toggle>
      <Toggle disabled defaultPressed>
        Pressed
      </Toggle>
    </div>
  );
}
