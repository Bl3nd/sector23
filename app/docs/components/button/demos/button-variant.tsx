import { Button } from "@/registry/sector23/ui/button";

export function ButtonVariant() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary (default)</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-emphasized">Ghost Emphasized</Button>
    </div>
  );
}
