"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/registry/sector23/ui/button";

export function CopyButton({ code }: { code: string }): ReactNode {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const ms = 2000;
    const timeout = globalThis.setTimeout(() => {
      setCopied(false);
    }, ms);

    return () => {
      globalThis.clearTimeout(timeout);
    };
  }, [copied]);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      return;
    }

    setCopied(true);
  }

  return (
    <Button
      variant="outline"
      size="sm"
      aria-label={copied ? "Copied" : "Copy code"}
      className="absolute inset-e-2 top-2 bg-background"
      onClick={() => {
        void copyCode();
      }}
    >
      <span>
        {copied ? <CheckIcon className="text-chart-2" /> : <ClipboardIcon />}
      </span>
    </Button>
  );
}
