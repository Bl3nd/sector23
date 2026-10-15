# Select

The timezone select opens on the placeholder. Choosing Eastern Time shows that label in the trigger.

## Sub-features

- `select-placeholder` shows `Select a timezone` and no chosen zone.
- `select-eastern` shows `Eastern Time (UTC−05:00)` in the trigger.

## How to get to it (user POV)

- Open `/docs/components/select`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the select page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/select`, then `browser_lock` with action `lock`, then `browser_snapshot`. A combobox named `Timezone` is collapsed.
- **Open the list.** Click that combobox. Run `browser_click` on the snapshot ref whose role is `combobox` and name is `Timezone`. The list includes an option named `Eastern Time (UTC−05:00)`.
- **Choose it.** Click that option. Run `browser_snapshot`, then `browser_click` on the ref whose name is `Eastern Time (UTC−05:00)`. The trigger shows `Eastern Time (UTC−05:00)`.
- **Proof.** Save the snapshot after the choice to `artifacts/select/eastern.aria.txt` and copy a screenshot to `artifacts/select/eastern.png`. Both show Sector23 and `Eastern Time (UTC−05:00)`.

## Gotchas

- The minus sign in `UTC−05:00` is a minus character, not a hyphen. Match the option text from the snapshot.
- The option list can be missing from the snapshot returned by the opening click. Snapshot again before choosing.
- Pacific Time is a different option. This recipe does not select it.
