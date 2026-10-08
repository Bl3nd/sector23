# Scroll area

The scroll area shows the start of a passage. Scrolling down reveals the second paragraph.

## Sub-features

- `scroll-area-top` shows the opening `Lorem ipsum` sentence.
- `scroll-area-down` reveals the paragraph that starts `Sed sed gravida dolor.`

## How to get to it (user POV)

- Open `/docs/components/scroll-area` and scroll the passage.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23`.

- **Open the demo.** Go to the scroll area page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/scroll-area`, then `browser_lock` with action `lock`, then `browser_snapshot`. The visible text includes `Lorem ipsum dolor sit amet`. The sentence `Sed sed gravida dolor.` is not yet in view.
- **Scroll down.** Scroll the second paragraph into view. The passage has no snapshot ref of its own. Run `browser_scroll` with `scrollIntoView` true on the text node whose name starts `Sed sed gravida dolor.` The viewport scrolls and that paragraph is visible. The opening `Lorem ipsum` sentence can leave the viewport.
- **Proof.** Save a snapshot that includes `Sed sed gravida dolor.` to `artifacts/scroll-area/scrolled.aria.txt` and copy a screenshot to `artifacts/scroll-area/scrolled.png`. Both show Sector23 and `Sed sed gravida dolor.`

## Gotchas

- Scroll the passage, not the browser page. The passage is the element with the scrollbar.
- The second paragraph is in the page from the start and is clipped. The proof is that it becomes visible.
