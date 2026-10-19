"use client";

import { XIcon } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
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

const shortcutGroups = [
  {
    title: "General",
    shortcuts: [
      { action: "Open command palette", keys: ["Ctrl", "K"] },
      { action: "Search files", keys: ["Ctrl", "P"] },
      { action: "Open settings", keys: ["Ctrl", ","] },
      { action: "Show keyboard shortcuts", keys: ["?"] },
      { action: "Toggle theme", keys: ["Ctrl", "Shift", "L"] },
    ],
  },
  {
    title: "Navigation",
    shortcuts: [
      { action: "Go to dashboard", keys: ["G", "D"] },
      { action: "Go to projects", keys: ["G", "P"] },
      { action: "Go to deployments", keys: ["G", "E"] },
      { action: "Go to settings", keys: ["G", "S"] },
      { action: "Go back", keys: ["Alt", "←"] },
      { action: "Go forward", keys: ["Alt", "→"] },
    ],
  },
  {
    title: "Editing",
    shortcuts: [
      { action: "Save changes", keys: ["Ctrl", "S"] },
      { action: "Undo", keys: ["Ctrl", "Z"] },
      { action: "Redo", keys: ["Ctrl", "Shift", "Z"] },
      { action: "Duplicate line", keys: ["Shift", "Alt", "↓"] },
      { action: "Comment line", keys: ["Ctrl", "/"] },
      { action: "Format document", keys: ["Shift", "Alt", "F"] },
    ],
  },
  {
    title: "Deployments",
    shortcuts: [
      { action: "Deploy to preview", keys: ["Ctrl", "Shift", "D"] },
      { action: "Promote to production", keys: ["Ctrl", "Shift", "P"] },
      { action: "Roll back", keys: ["Ctrl", "Shift", "R"] },
      { action: "Open build logs", keys: ["Ctrl", "Shift", "B"] },
    ],
  },
  {
    title: "Panels",
    shortcuts: [
      { action: "Toggle sidebar", keys: ["Ctrl", "B"] },
      { action: "Toggle terminal", keys: ["Ctrl", "`"] },
      { action: "Toggle activity feed", keys: ["Ctrl", "Shift", "A"] },
      { action: "Focus next panel", keys: ["F6"] },
      { action: "Close panel", keys: ["Esc"] },
    ],
  },
  {
    title: "Selection",
    shortcuts: [
      { action: "Select all", keys: ["Ctrl", "A"] },
      { action: "Select next match", keys: ["Ctrl", "D"] },
      { action: "Expand selection", keys: ["Shift", "Alt", "→"] },
      { action: "Shrink selection", keys: ["Shift", "Alt", "←"] },
      { action: "Add cursor above", keys: ["Ctrl", "Alt", "↑"] },
      { action: "Add cursor below", keys: ["Ctrl", "Alt", "↓"] },
    ],
  },
  {
    title: "Search",
    shortcuts: [
      { action: "Find in file", keys: ["Ctrl", "F"] },
      { action: "Replace in file", keys: ["Ctrl", "H"] },
      { action: "Find in project", keys: ["Ctrl", "Shift", "F"] },
      { action: "Next result", keys: ["F3"] },
      { action: "Previous result", keys: ["Shift", "F3"] },
    ],
  },
  {
    title: "Files",
    shortcuts: [
      { action: "New file", keys: ["Ctrl", "N"] },
      { action: "Close file", keys: ["Ctrl", "W"] },
      { action: "Reopen closed file", keys: ["Ctrl", "Shift", "T"] },
      { action: "Rename file", keys: ["F2"] },
      { action: "Next tab", keys: ["Ctrl", "Tab"] },
      { action: "Previous tab", keys: ["Ctrl", "Shift", "Tab"] },
    ],
  },
  {
    title: "Code review",
    shortcuts: [
      { action: "Next changed file", keys: ["J"] },
      { action: "Previous changed file", keys: ["K"] },
      { action: "Approve changes", keys: ["Ctrl", "Shift", "Enter"] },
      { action: "Request changes", keys: ["Ctrl", "Shift", "X"] },
      { action: "Toggle split diff", keys: ["Ctrl", "Shift", "S"] },
    ],
  },
  {
    title: "Comments",
    shortcuts: [
      { action: "Add comment", keys: ["C"] },
      { action: "Reply to thread", keys: ["R"] },
      { action: "Resolve thread", keys: ["Ctrl", "Shift", "E"] },
      { action: "Submit comment", keys: ["Ctrl", "Enter"] },
      { action: "Mention teammate", keys: ["@"] },
    ],
  },
  {
    title: "Terminal",
    shortcuts: [
      { action: "New terminal", keys: ["Ctrl", "Shift", "`"] },
      { action: "Clear terminal", keys: ["Ctrl", "L"] },
      { action: "Copy selection", keys: ["Ctrl", "Shift", "C"] },
      { action: "Paste", keys: ["Ctrl", "Shift", "V"] },
      { action: "Scroll to top", keys: ["Ctrl", "Home"] },
    ],
  },
];

export function DialogOuterScroll() {
  const popupRef = useRef<HTMLDivElement | null>(null);

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Keyboard shortcuts
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogViewport>
          <ScrollArea
            style={{ position: undefined }}
            className="h-full overscroll-contain group-data-ending-style/dialog-viewport:pointer-events-none"
          >
            <ScrollAreaViewport className="h-full overscroll-contain group-data-ending-style/dialog-viewport:pointer-events-none">
              <ScrollAreaContent className="min-h-full">
                <DialogPopup
                  ref={popupRef}
                  initialFocus={popupRef}
                  className="relative top-auto left-auto mx-auto my-16 max-w-[calc(100vw-5rem)] translate-x-0 translate-y-0 transition-[translate] data-ending-style:translate-y-[max(100dvh,100%)] data-ending-style:scale-100 data-ending-style:opacity-100 data-starting-style:translate-y-[100dvh] data-starting-style:scale-100 data-starting-style:opacity-100"
                >
                  <DialogHeader className="grid grid-cols-[1fr_auto] items-center">
                    <DialogTitle>Keyboard shortcuts</DialogTitle>
                    <DialogClose
                      aria-label="Close"
                      render={<Button variant="ghost" />}
                      className="h-5 w-5"
                    >
                      <XIcon />
                    </DialogClose>
                    <DialogDescription className="col-span-2">
                      Move around your workspace without reaching for the mouse.
                      On macOS, use Cmd in place of Ctrl.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-6 px-4 pb-4 text-sm">
                    {shortcutGroups.map((group) => (
                      <section
                        key={group.title}
                        className="flex flex-col gap-2"
                      >
                        <h3 className="font-medium">{group.title}</h3>
                        <dl className="flex flex-col gap-2">
                          {group.shortcuts.map((shortcut) => (
                            <div
                              key={shortcut.action}
                              className="flex items-center justify-between gap-4"
                            >
                              <dt className="text-muted-foreground">
                                {shortcut.action}
                              </dt>
                              <dd className="flex gap-1">
                                {shortcut.keys.map((key) => (
                                  <kbd
                                    key={key}
                                    className="rounded border border-border px-1.5 font-mono text-xs"
                                  >
                                    {key}
                                  </kbd>
                                ))}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </section>
                    ))}
                  </div>
                </DialogPopup>
              </ScrollAreaContent>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar>
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollArea>
        </DialogViewport>
      </DialogPortal>
    </Dialog>
  );
}
