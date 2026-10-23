"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import { Button } from "@/registry/sector23/ui/button";

export function CodeFold({
  code,
  visibleLines,
  totalLines,
  children,
}: {
  code: string;
  visibleLines: number;
  totalLines: number;
  children: ReactNode;
}): ReactNode {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentId = useId();

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
    <div
      data-slot="code-fold"
      data-expanded={expanded}
      style={{ "--fold-lines": visibleLines } as CSSProperties}
    >
      <div id={contentId} className="relative">
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
            {copied ? (
              <CheckIcon className="text-chart-2" />
            ) : (
              <ClipboardIcon />
            )}
          </span>
        </Button>
        {children}
        {expanded ? undefined : (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background to-transparent"
          />
        )}
      </div>
      <div className="flex w-full items-center justify-center border-t border-border">
        <Button
          aria-expanded={expanded}
          aria-controls={contentId}
          variant="ghost-emphasized"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="w-full rounded-none rounded-b-md focus-visible:ring-inset"
        >
          {expanded ? "Show less" : `Show all ${totalLines} lines`}
        </Button>
      </div>
    </div>
  );
}
