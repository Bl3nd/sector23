# Checkbox sibling label

The Label example places the text beside the box. The checkbox is named Email me the changelog. A click on that text checks the box. The demo does not set `nativeButton`.

## Sub-features

- `checkbox-sibling-unchecked` opens unchecked.
- `checkbox-sibling-check` checks Email me the changelog by clicking the label text.

## How to get to it (user POV)

- Open `/docs/components/checkbox`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the checkbox page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/checkbox`, then `browser_lock` with action `lock`, then `browser_snapshot`. One checkbox is named `Email me the changelog`. It is unchecked.
- **Check it.** Click the label text Email me the changelog, not the box. Run `browser_click` on that label's snapshot ref. The checkbox named Email me the changelog is checked.
- **Proof.** Save the checked snapshot to `artifacts/checkbox-sibling-label/checked.aria.txt` and copy a screenshot to `artifacts/checkbox-sibling-label/checked.png`.

## Gotchas

- Click the label text. A click on the box does not prove that `htmlFor` is wired.
- Do not click a checkbox named Accept terms and conditions. That name belongs to other demos on the page.
