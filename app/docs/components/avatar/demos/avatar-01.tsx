import { UserIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/sector23/ui/avatar";

export default function Avatar01() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1706606999710-72658165a73d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <AvatarFallback delay={600}>CN</AvatarFallback>
      </Avatar>

      <Avatar>
        <UserIcon />
      </Avatar>
    </div>
  );
}
