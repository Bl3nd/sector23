import { Tag, type Config, type RenderableTreeNode } from "@markdoc/markdoc";

// oxlint-disable no-magic-numbers

export type TocLevel = 2 | 3 | 4 | 5 | 6;

export interface TocEntry {
  id: string;
  level: TocLevel;
  text: string;
}

export type Toc = readonly TocEntry[];

export function collectToc(
  children: readonly RenderableTreeNode[],
  config: Config,
): Toc {
  const headingName = headingRenderName(config);
  const entries: TocEntry[] = [];
  collectHeadings(children, headingName, entries);
  return entries;
}

function headingRenderName(config: Config): string {
  const render: unknown = config.nodes?.heading?.render;
  if (typeof render === "string" && render !== "") {
    return render;
  }
  if (typeof render === "function" && render.name !== "") {
    return render.name;
  }
  throw new Error("collectToc: heading render name is missing");
}

function collectHeadings(
  nodes: readonly RenderableTreeNode[],
  headingName: string,
  entries: TocEntry[],
): void {
  for (const node of nodes) {
    if (Tag.isTag(node)) {
      if (node.name === headingName) {
        const entry = tocEntry(node);
        if (entry) {
          entries.push(entry);
        }
      } else {
        collectHeadings(node.children, headingName, entries);
      }
    }
  }
}

function tocEntry(tag: Tag): TocEntry | undefined {
  const { id, level } = tag.attributes;
  if (typeof id !== "string" || id === "" || !isTocLevel(level)) {
    return undefined;
  }
  return { id, level, text: headingText(tag.children) };
}

function isTocLevel(level: unknown): level is TocLevel {
  return (
    level === 2 || level === 3 || level === 4 || level === 5 || level === 6
  );
}

function headingText(nodes: readonly RenderableTreeNode[]): string {
  return textOf(nodes).replace(/\s+/g, " ").trim();
}

function textOf(nodes: readonly RenderableTreeNode[]): string {
  let text = "";
  for (const node of nodes) {
    if (typeof node === "string") {
      text += node;
    } else if (Tag.isTag(node)) {
      text += textOf(node.children);
    }
  }
  return text;
}
