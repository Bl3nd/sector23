# Radio group

The radio group asks for a favorite color and opens with Red selected. Choosing Green selects Green and clears Red.

## Sub-features

- `radio-default` opens with Red selected.
- `radio-green` selects Green and leaves Red unselected.

## How to get to it (user POV)

- Open `/docs/components/radio-group`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the radio group page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/radio-group`, then `browser_lock` with action `lock`, then `browser_snapshot`. The group is named `What is your favorite color?`. The radio named `Red` is checked. The radio named `Green` is not checked.
- **Choose Green.** Click `Green`. Run `browser_click` on the snapshot ref whose role is `radio` and name is `Green`. `Green` is checked. `Red` is not checked.
- **Proof.** Save the snapshot after the click to `artifacts/radio-group/green.aria.txt` and copy a screenshot to `artifacts/radio-group/green.png`. Both show Sector23 with Green checked.

## Gotchas

- Blue stays unchecked. This recipe does not select it.
- Match role `radio`. The question is the group name.
