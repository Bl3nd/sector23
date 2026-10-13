import { UserIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";

export function ButtonSize() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium (default)</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm">
          <UserIcon />
        </Button>
        <Button size="md">
          <UserIcon />
        </Button>
        <Button size="lg">
          <UserIcon />
        </Button>
      </div>
    </div>
  );
}
