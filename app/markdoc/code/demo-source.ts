import "server-only";
import { globSync, readFileSync } from "node:fs";
import path from "node:path";

const DEMOS_ROOT = path.join(process.cwd(), "app/docs/components");

export function toCopyPasteSource(demoSource: string): string {
  return demoSource.replaceAll("@/registry/sector23/ui/", "@/components/ui/");
}

export function loadDemoSource(key: string): string {
  const matches = globSync(`*/demos/${key}.tsx`, { cwd: DEMOS_ROOT });
  const [match, second] = matches;

  if (match === undefined || second !== undefined) {
    throw new Error(
      `Expected exactly one file at app/docs/components/*/demos/${key}.tsx, found ${matches.length}: ${matches.join(", ")}`,
    );
  }

  return readFileSync(path.join(DEMOS_ROOT, match), "utf8");
}
