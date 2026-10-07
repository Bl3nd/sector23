import { Input } from "@/app/components/input";
import { Label } from "@/app/components/label";

export default function LabelPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Label className="flex flex-col items-start gap-1.5">
        Name
        <Input placeholder="Enter your name" />
      </Label>
    </div>
  );
}
