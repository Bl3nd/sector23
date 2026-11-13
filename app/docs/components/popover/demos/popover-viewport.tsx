"use client";

import { Button } from "@/registry/sector23/ui/button";
import {
  createPopoverHandle,
  Popover,
  PopoverArrow,
  PopoverDescription,
  PopoverHeader,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  PopoverViewport,
} from "@/registry/sector23/ui/popover";

interface Person {
  name: string;
  role: string;
  status: string;
}

const people: readonly Person[] = [
  {
    name: "Alice",
    role: "Product designer",
    status: "Reviewing the onboarding flow mockups.",
  },
  {
    name: "Bob",
    role: "Frontend engineer",
    status: "Shipping the new settings page this week.",
  },
  {
    name: "Carol",
    role: "Engineering manager",
    status: "Out of office until Monday.",
  },
];

const handle = createPopoverHandle<Person>();

export function PopoverViewportDemo() {
  return (
    <>
      <div className="flex flex-wrap gap-1.5">
        {people.map((person) => (
          <PopoverTrigger
            key={person.name}
            handle={handle}
            payload={person}
            render={<Button variant="outline" />}
          >
            {person.name}
          </PopoverTrigger>
        ))}
      </div>
      <Popover handle={handle}>
        {({ payload }) => (
          <PopoverPortal>
            <PopoverPositioner>
              <PopoverPopup>
                <PopoverArrow />
                <PopoverViewport>
                  <PopoverHeader>
                    <PopoverTitle>
                      {payload?.name ?? "Team member"}
                    </PopoverTitle>
                    {payload && (
                      <PopoverDescription>{payload.role}</PopoverDescription>
                    )}
                  </PopoverHeader>
                  {payload && <p className="text-sm">{payload.status}</p>}
                </PopoverViewport>
              </PopoverPopup>
            </PopoverPositioner>
          </PopoverPortal>
        )}
      </Popover>
    </>
  );
}
