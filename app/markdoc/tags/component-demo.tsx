import type { ReactNode } from "react";

import Accordion01 from "@/app/docs/components/accordion/demos/accordion-01";
import AlertDialog01 from "@/app/docs/components/alert-dialog/demos/alert-dialog-01";
import Autocomplete01 from "@/app/docs/components/autocomplete/demos/autocomplete-01";

import { DemoViewportFrame } from "./demo-viewport-frame";

const demoRegistry = {
  "accordion-01": Accordion01,
  "alert-dialog-01": AlertDialog01,
  "autocomplete-01": Autocomplete01,
} satisfies Record<string, () => ReactNode>;

type DemoPath = keyof typeof demoRegistry;

function parseDemoPath(raw: string): DemoPath {
  const keys = Object.keys(demoRegistry) as DemoPath[];

  for (const key of keys) {
    if (key === raw) {
      return key;
    }
  }

  throw new Error(
    `Unknown component "${raw}". Known keys: ${keys.join(", ")}. Add a static import and a key on demoRegistry in app/markdoc/tags/component-demo.tsx.`,
  );
}

export function ComponentDemo({ component }: { component: string }) {
  const Demo = demoRegistry[parseDemoPath(component)];

  return (
    <DemoViewportFrame>
      <Demo />
    </DemoViewportFrame>
  );
}
