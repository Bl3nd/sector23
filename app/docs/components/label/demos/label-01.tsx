import { Input } from "@/registry/sector23/ui/input";
import { Label } from "@/registry/sector23/ui/label";

export default function Label01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Label className="flex flex-col items-start gap-1.5">
        Name
        <Input placeholder="Enter your name" />
      </Label>
    </div>
  );
}
