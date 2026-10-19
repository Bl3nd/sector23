import { Button } from "@/registry/sector23/ui/button";

export function ButtonPopupOpen() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button data-popup-open="true" variant="primary">
        Primary (default)
      </Button>
      <Button data-popup-open="true" variant="secondary">
        Secondary
      </Button>
      <Button data-popup-open="true" variant="destructive">
        Destructive
      </Button>
      <Button data-popup-open="true" variant="outline">
        Outline
      </Button>
      <Button data-popup-open="true" variant="ghost">
        Ghost
      </Button>
      <Button data-popup-open="true" variant="ghost-emphasized">
        Ghost Emphasized
      </Button>
    </div>
  );
}
