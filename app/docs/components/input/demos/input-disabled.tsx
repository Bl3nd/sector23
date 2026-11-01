import { Input } from "@/registry/sector23/ui/input";
import { Label } from "@/registry/sector23/ui/label";

export function InputDisabled() {
  return (
    <Label className="flex w-56 flex-col gap-1.5">
      Workspace URL
      <Input disabled defaultValue="sector23.dev/acme" />
    </Label>
  );
}
