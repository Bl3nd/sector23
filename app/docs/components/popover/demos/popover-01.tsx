import { Button } from "@/registry/sector23/ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/sector23/ui/popover";

const notifications = [
  { id: 1, message: "Sarah commented on Acme Website", time: "2 minutes ago" },
  {
    id: 2,
    message: "Your deployment to production succeeded",
    time: "1 hour ago",
  },
  { id: 3, message: "Mike invited you to the Design team", time: "Yesterday" },
];

export default function Popover01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Notifications
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup>
              <PopoverArrow />
              <PopoverTitle>Notifications</PopoverTitle>
              <PopoverDescription>
                You have 3 unread notifications.
              </PopoverDescription>
              <ul className="my-2 flex flex-col gap-2">
                {notifications.map((notification) => (
                  <li key={notification.id} className="flex flex-col text-sm">
                    <span>{notification.message}</span>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </li>
                ))}
              </ul>
              <PopoverClose render={<Button size="sm" variant="secondary" />}>
                Mark all as read
              </PopoverClose>
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </Popover>
    </div>
  );
}
