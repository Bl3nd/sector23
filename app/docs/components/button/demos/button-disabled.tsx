import { Button } from "@/registry/sector23/ui/button";

export function ButtonDisabled() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button disabled variant="primary">
        Primary (default)
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="destructive">
        Destructive
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled variant="ghost-emphasized">
        Ghost Emphasized
      </Button>
    </div>
  );
}
