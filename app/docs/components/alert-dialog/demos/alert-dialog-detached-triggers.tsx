"use client";

import { AlertCircleIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  createAlertDialogHandle,
} from "@/registry/sector23/ui/alert-dialog";
import { Button } from "@/registry/sector23/ui/button";

interface Project {
  name: string;
  taskCount: number;
}

const projects: readonly Project[] = [
  { name: "Orbit redesign", taskCount: 12 },
  { name: "Nova migration", taskCount: 7 },
  { name: "Helix beta", taskCount: 31 },
];

const deleteProjectDialog = createAlertDialogHandle<Project>();

export function AlertDialogDetachedTriggers() {
  return (
    <>
      <ul className="w-full max-w-sm divide-y divide-border rounded-lg border border-border">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex items-center justify-between gap-3 p-3"
          >
            <div>
              <p className="text-sm font-medium">{project.name}</p>
              <p className="text-sm text-muted-foreground">
                {project.taskCount} tasks
              </p>
            </div>
            <AlertDialogTrigger
              handle={deleteProjectDialog}
              payload={project}
              aria-label={`Delete ${project.name}`}
              render={<Button variant="destructive" size="sm" />}
            >
              Delete
            </AlertDialogTrigger>
          </li>
        ))}
      </ul>
      <AlertDialog handle={deleteProjectDialog}>
        {({ payload }) => (
          <AlertDialogPortal>
            <AlertDialogBackdrop />
            <AlertDialogPopup>
              <AlertDialogHeader>
                <div className="flex size-8 items-center justify-center rounded-full bg-destructive/5">
                  <AlertCircleIcon className="size-4 shrink-0 text-destructive" />
                </div>
                <AlertDialogTitle>
                  {payload ? `Delete "${payload.name}"?` : "Delete project?"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {payload
                    ? `This will permanently delete the project, including ${payload.taskCount} tasks and shared files.`
                    : "This will permanently delete the project and its shared files."}{" "}
                  This action can&apos;t be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogClose render={<Button variant="outline" />}>
                  Cancel
                </AlertDialogClose>
                <AlertDialogClose render={<Button variant="destructive" />}>
                  Delete project
                </AlertDialogClose>
              </AlertDialogFooter>
            </AlertDialogPopup>
          </AlertDialogPortal>
        )}
      </AlertDialog>
    </>
  );
}
