// oxlint-disable no-magic-numbers
"use client";

import { Loader2Icon, SendIcon } from "lucide-react";
import { useId, useState } from "react";

import { Button } from "@/registry/sector23/ui/button";

export function ButtonLoading() {
  const [loading, setLoading] = useState(false);
  const labelId = useId();

  return (
    <Button
      disabled={loading}
      focusableWhenDisabled
      aria-labelledby={labelId}
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }}
    >
      <span id={labelId}>
        {loading ? (
          <>
            <Loader2Icon className="animate-spin" data-side="inline-start" />{" "}
            Submitting...
          </>
        ) : (
          <>
            <SendIcon data-side="inline-start" />
            Submit
          </>
        )}
      </span>
    </Button>
  );
}
