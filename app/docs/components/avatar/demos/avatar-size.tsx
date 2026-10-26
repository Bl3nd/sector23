import { UserIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/registry/sector23/ui/avatar";

export function AvatarSize() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar size="sm">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex items-center gap-4">
        <Avatar size="sm">
          <UserIcon />
        </Avatar>
        <Avatar size="md">
          <UserIcon />
        </Avatar>
        <Avatar size="lg">
          <UserIcon />
        </Avatar>
      </div>
    </div>
  );
}
