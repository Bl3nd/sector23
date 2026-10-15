# Switch

The switch demo shows Notifications off. A click turns it on.

## Sub-features

- `switch-off` opens with Notifications off.
- `switch-on` turns Notifications on.

## How to get to it (user POV)

- Open `/docs/components/switch`.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Sector23 Docs | Toggle`.

- **Open the demo.** Go to the switch page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/switch`, then `browser_lock` with action `lock`, then `browser_snapshot`. The switch named `Notifications` has no `checked` state.
- **Turn it on.** Click that switch. Run `browser_click` on the snapshot ref whose role is `switch` and name is `Notifications`. The same switch has state `checked`.
- **Proof.** Save the on snapshot to `artifacts/switch/on.aria.txt` and copy a screenshot to `artifacts/switch/on.png`. Both show Sector23 and the checked Notifications switch.

## Gotchas

- Match role `switch`. The word Notifications is the accessible name.
- One click turns it on. This recipe does not click again to turn it off.
