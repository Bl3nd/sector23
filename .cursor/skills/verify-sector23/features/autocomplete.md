# Autocomplete

The autocomplete demo filters tags as you type. Typing `sec` shows the `security` tag, and choosing it fills the field.

## Sub-features

- `autocomplete-filter` shows the `security` option after typing `sec`.
- `autocomplete-choose` puts `security` in the Search tags field.
- `autocomplete-grouped-filter` shows the Area group and `security` after typing `sec` into Search grouped tags, with status `1 of 10 tags` and no separator.
- `autocomplete-grouped-empty` shows `No tags found.` after typing `zzz`, and the status count is gone.
- `autocomplete-size` shows three comboboxes named Small, Medium (default), and Large. Their closed heights are 32px, 36px, and 40px. Opening Large shows a `feature` option at 40px.
- `autocomplete-command-palette` opens a dialog from Open command palette. ArrowDown moves the highlight to Assign to me. Clicking Create issue closes the dialog.

## How to get to it (user POV)

- Open `/docs/components/autocomplete`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the autocomplete page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/autocomplete`, then `browser_lock` with action `lock`, then `browser_snapshot`. A combobox named `Search tags` is collapsed. Its placeholder is `e.g. feature`. A button named `Open popup` is present.
- **Filter.** Type `sec` into that combobox. Run `browser_type` on the snapshot ref whose role is `combobox` and name is `Search tags`, with text `sec`. The list shows an option named `security`.
- **Choose.** Click that option. Run `browser_snapshot`, then `browser_click` on the ref whose role is `option` and name is `security`. The combobox value is `security`.
- **Grouped filter.** The combobox named `Search grouped tags` is on the same page. Run `browser_type` on that combobox with text `sec`. The list shows an option named `security`, the text `Area`, and the text `1 of 10 tags`. The text `Type` and the text `Scope` are absent. No separator is shown.
- **Grouped empty.** Clear that combobox and type `zzz`. The popup shows `No tags found.` The text `of 10 tags` is absent.
- **Size.** The comboboxes named Small, Medium (default), and Large sit under the Size heading. Open the Large popup. The list shows an option named `feature`.
- **Command palette.** Click the button named Open command palette. A combobox named Search commands is expanded, and the list shows an option named Create issue. Press ArrowDown. The highlighted option is Assign to me. Click Create issue. The Search commands combobox is gone, and Open command palette is collapsed.
- **Proof.** Save the snapshot after the choice to `artifacts/autocomplete/chosen.aria.txt` and copy a screenshot to `artifacts/autocomplete/chosen.png`. Both show Sector23 and `security` in the Search tags field.

## Gotchas

- `d` would type into this field. This page is not a theme page.
- The popup can list several tags before the filter. The proof is the `security` option after `sec`, then the filled field.
- The document title is `Autocomplete | Sector23`. The root metadata template is `%s | Sector23`.
