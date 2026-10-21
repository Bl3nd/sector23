# Combobox

The combobox demo picks a shipping country. Choosing Canada fills the field with Canada.

## Sub-features

- `combobox-empty` opens with an empty Shipping country field.
- `combobox-canada` chooses Canada and shows that name in the field.

## How to get to it (user POV)

- Open `/docs/components/combobox`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the combobox page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/combobox`, then `browser_lock` with action `lock`, then `browser_snapshot`. A combobox named `Shipping country` is collapsed. Its placeholder is `e.g. Canada`.
- **Open the list.** Click the combobox. Run `browser_click` on the snapshot ref whose role is `combobox` and name is `Shipping country`. The list includes an option named `Canada`.
- **Choose Canada.** Click that option. Run `browser_snapshot`, then `browser_click` on the ref whose role is `option` and name is `Canada`. The combobox value is `Canada`.
- **Proof.** Save the snapshot after the choice to `artifacts/combobox/canada.aria.txt` and copy a screenshot to `artifacts/combobox/canada.png`. Both show Sector23 and `Canada` in the Shipping country field.

## Gotchas

- `d` would type into this field. This page is not a theme page.
- The empty message `We don't ship to that country yet.` appears for a filter with no match. This recipe chooses Canada from the list.
