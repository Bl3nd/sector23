import { Input } from "@/registry/sector23/ui/input";
import { Label } from "@/registry/sector23/ui/label";

export function InputDefault() {
  return (
    <Label className="flex w-56 flex-col gap-1.5">
      Email
      <Input type="email" placeholder="you@company.com" />
    </Label>
  );
}
