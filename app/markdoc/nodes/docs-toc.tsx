"use client";

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { Toc, TocLevel } from "../toc";

// oxlint-disable no-magic-numbers
// oxlint-disable no-null

const indentClass: Record<TocLevel, string> = {
  2: "ps-0",
  3: "ps-3",
  4: "ps-6",
  5: "ps-9",
  6: "ps-12",
};

interface Highlight {
  inView: ReadonlySet<string>;
  currentId: string | null;
}

const emptyHighlight: Highlight = { inView: new Set(), currentId: null };

interface MeasuredHeading {
  id: string;
  level: TocLevel;
  top: number;
}

export function DocsToc({ entries }: { entries: Toc }) {
  const navRef = useRef<HTMLElement>(null);
  const [highlight, setHighlight] = useState<Highlight>(emptyHighlight);

  useEffect(() => {
    const viewport = navRef.current?.closest(
      '[data-slot="scroll-area-viewport"]',
    );
    if (!viewport) {
      setHighlight((prev) =>
        sameHighlight(prev, emptyHighlight) ? prev : emptyHighlight,
      );
      return;
    }
    return watchViewport(viewport, entries, setHighlight);
  }, [entries]);

  if (entries.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      className="sticky top-2 hidden max-h-[calc(100dvh-var(--header-height))] w-full self-start overflow-y-auto xl:block"
    >
      <p className="mb-2 text-sm font-medium text-foreground">On this page</p>
      <ul className="flex flex-col gap-1">
        {entries.map((entry) => {
          const inView = highlight.inView.has(entry.id);
          const current = entry.id === highlight.currentId;
          const color = inView ? "text-foreground" : "text-muted-foreground";
          const weight = current ? "font-medium" : "";
          return (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                className={`block text-sm ${indentClass[entry.level]} ${color} ${weight}`}
                aria-current={current ? "location" : undefined}
                data-in-view={inView && !current ? "" : undefined}
              >
                {entry.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function watchViewport(
  viewport: Element,
  entries: Toc,
  setHighlight: Dispatch<SetStateAction<Highlight>>,
): () => void {
  let frame = 0;
  const schedule = () => {
    if (frame !== 0) {
      return;
    }
    frame = requestAnimationFrame(() => {
      frame = 0;
      const next = highlightFor(viewport, entries);
      setHighlight((prev) => (sameHighlight(prev, next) ? prev : next));
    });
  };

  const observer = new ResizeObserver(schedule);
  observer.observe(viewport);
  const content = viewport.firstElementChild;
  if (content) {
    observer.observe(content);
  }
  viewport.addEventListener("scroll", schedule, { passive: true });
  schedule();

  return () => {
    viewport.removeEventListener("scroll", schedule);
    observer.disconnect();
    if (frame !== 0) {
      cancelAnimationFrame(frame);
    }
  };
}

function sameHighlight(prev: Highlight, next: Highlight): boolean {
  if (
    prev.currentId !== next.currentId ||
    prev.inView.size !== next.inView.size
  ) {
    return false;
  }
  for (const id of next.inView) {
    if (!prev.inView.has(id)) {
      return false;
    }
  }
  return true;
}

function highlightFor(viewport: Element, entries: Toc): Highlight {
  const viewportRect = viewport.getBoundingClientRect();
  const headings = measureHeadings(viewportRect, entries);
  const inView = headingsInView(headings, viewportRect.height);
  return { inView, currentId: currentHeading(headings, inView) };
}

function measureHeadings(
  viewportRect: DOMRect,
  entries: Toc,
): MeasuredHeading[] {
  const headings: MeasuredHeading[] = [];
  for (const entry of entries) {
    const element = document.getElementById(entry.id);
    if (element) {
      headings.push({
        id: entry.id,
        level: entry.level,
        top: element.getBoundingClientRect().top - viewportRect.top,
      });
    }
  }
  return headings;
}

function headingsInView(
  headings: readonly MeasuredHeading[],
  viewportHeight: number,
): Set<string> {
  const inView = new Set<string>();
  for (const [index, heading] of headings.entries()) {
    const end = sectionEnd(heading.level, headings.slice(index + 1));
    const overlaps =
      heading.top < end && heading.top < viewportHeight && end > 0;
    if (overlaps) {
      inView.add(heading.id);
    }
  }
  return inView;
}

function sectionEnd(level: TocLevel, rest: readonly MeasuredHeading[]): number {
  for (const following of rest) {
    if (following.level <= level) {
      return following.top;
    }
  }
  return Number.POSITIVE_INFINITY;
}

function currentHeading(
  headings: readonly MeasuredHeading[],
  inView: ReadonlySet<string>,
): string | null {
  const activationLine = 64;
  let currentId: string | null = null;
  for (const heading of headings) {
    if (
      inView.has(heading.id) &&
      (currentId === null || heading.top <= activationLine)
    ) {
      currentId = heading.id;
    }
  }
  return currentId;
}
