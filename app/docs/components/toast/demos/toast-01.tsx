// oxlint-disable no-magic-numbers
"use client";

import { useState } from "react";

import { Button } from "@/registry/sector23/ui/button";
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastHeader,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToastManager,
} from "@/registry/sector23/ui/toast";

export default function Toast01() {
  return (
    <ToastProvider>
      <div className="flex flex-col items-center justify-center py-10">
        <ToastButton />
        <Toasts />
      </div>
    </ToastProvider>
  );
}

function ToastButton() {
  const toastManager = useToastManager();
  const [count, setCount] = useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `Toast ${count + 1} created`,
      description: "This is a toast notification",
    });
  }

  return <Button onClick={createToast}>Create toast</Button>;
}

function Toasts() {
  const { toasts } = useToastManager();

  return (
    <ToastPortal>
      <ToastViewport>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast}>
            <ToastContent>
              <ToastHeader>
                <ToastTitle />
                <ToastDescription />
              </ToastHeader>
              <ToastClose render={<Button variant="outline" />}>
                Dismiss
              </ToastClose>
            </ToastContent>
          </Toast>
        ))}
      </ToastViewport>
    </ToastPortal>
  );
}
