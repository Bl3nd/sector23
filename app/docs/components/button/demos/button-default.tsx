import { UserIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";

export function ButtonDefault() {
  return (
    <Button>
      <UserIcon className="size-4" /> Click me
    </Button>
  );
}
