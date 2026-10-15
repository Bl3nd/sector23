# Autocomplete

The autocomplete demo filters tags as you type. Typing `sec` shows the `security` tag, and choosing it fills the field.

## Sub-features

- `autocomplete-filter` shows the `security` option after typing `sec`.
- `autocomplete-choose` puts `security` in the Search tags field.

## How to get to it (user POV)

- Open `/docs/components/autocomplete`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the autocomplete page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/autocomplete`, then `browser_lock` with action `lock`, then `browser_snapshot`. A combobox named `Search tags` is collapsed. Its placeholder is `e.g. feature`. A button named `Open popup` is present.
- **Filter.** Type `sec` into that combobox. Run `browser_type` on the snapshot ref whose role is `combobox` and name is `Search tags`, with text `sec`. The list shows an option named `security`.
- **Choose.** Click that option. Run `browser_snapshot`, then `browser_click` on the ref whose role is `option` and name is `security`. The combobox value is `security`.
- **Proof.** Save the snapshot after the choice to `artifacts/autocomplete/chosen.aria.txt` and copy a screenshot to `artifacts/autocomplete/chosen.png`. Both show Sector23 and `security` in the Search tags field.

## Gotchas

- `d` would type into this field. This page is not a theme page.
- The popup can list several tags before the filter. The proof is the `security` option after `sec`, then the filled field.
