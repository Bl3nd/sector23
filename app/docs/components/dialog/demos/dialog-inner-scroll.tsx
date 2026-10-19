import { Button } from "@/registry/sector23/ui/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogViewport,
} from "@/registry/sector23/ui/dialog";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/registry/sector23/ui/scroll-area";

const releases = [
  {
    version: "v2.8.0",
    date: "October 14, 2026",
    changes: [
      "Branch previews now deploy automatically for every pull request.",
      "Environment variables can be scoped to a single branch.",
      "The activity feed groups related deploys into one entry.",
    ],
  },
  {
    version: "v2.7.2",
    date: "September 30, 2026",
    changes: [
      "Fixed build logs occasionally cutting off the last few lines.",
      "Custom domains verify up to three times faster.",
    ],
  },
  {
    version: "v2.7.0",
    date: "September 16, 2026",
    changes: [
      "Added team roles with read-only, developer, and admin access.",
      "Audit log entries can be exported as CSV.",
      "Rollbacks keep the original build cache, so they finish in seconds.",
    ],
  },
  {
    version: "v2.6.1",
    date: "August 28, 2026",
    changes: [
      "Fixed a crash when renaming a project with an emoji in its name.",
      "Webhook retries now back off exponentially instead of every minute.",
    ],
  },
  {
    version: "v2.6.0",
    date: "August 12, 2026",
    changes: [
      "Introduced usage alerts for bandwidth and build minutes.",
      "Projects can be transferred between teams without redeploying.",
      "The CLI supports logging in with a one-time device code.",
    ],
  },
  {
    version: "v2.5.0",
    date: "July 22, 2026",
    changes: [
      "Edge functions are generally available in all regions.",
      "Build containers now ship with Node.js 24 by default.",
    ],
  },
];

export function DialogInnerScroll() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        What&apos;s new
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogViewport>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>What&apos;s new</DialogTitle>
              <DialogDescription>
                Recent updates and fixes across your workspace.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[min(20rem,calc(100dvh-14rem))]">
              <ScrollAreaViewport>
                <ScrollAreaContent>
                  {releases.map((release) => (
                    <section
                      key={release.version}
                      className="flex flex-col gap-1 px-2 py-2"
                    >
                      <h3 className="font-medium">
                        {release.version}{" "}
                        <span className="font-normal text-muted-foreground">
                          · {release.date}
                        </span>
                      </h3>
                      <ul className="list-disc ps-5 text-muted-foreground">
                        {release.changes.map((change) => (
                          <li key={change}>{change}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </ScrollAreaContent>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar>
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollArea>
            <DialogFooter>
              <DialogClose render={<Button />}>Got it</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </DialogViewport>
      </DialogPortal>
    </Dialog>
  );
}
