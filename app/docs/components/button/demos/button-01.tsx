import { UserIcon } from "lucide-react";

import { Button } from "@/app/components/button";

export default function Button01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Button>
        <UserIcon /> Click me
      </Button>
    </div>
  );
}
