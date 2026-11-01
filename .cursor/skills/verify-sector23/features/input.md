# Input

The input page has a labeled email field above Examples. Typing shows that text in the field. A disabled field further down keeps its value.

## Sub-features

- `input-empty` shows the textbox named `Email` with placeholder `you@company.com` and an empty value.
- `input-type` shows `ada@sector23.dev` after typing.
- `input-disabled` shows the disabled textbox named `Workspace URL` with value `sector23.dev/acme`.

## How to get to it (user POV)

- Open `/docs/components/input` and type in the field labeled Email.

## Driving it with the Cursor IDE browser

Preconditions:

- Sector23 is healthy at `http://127.0.0.1:4173`.
- `bun .cursor/skills/verify-sector23/verify.mjs doctor` reports that URL and `title=Toggle | Sector23`.

- **Open the demo.** Go to the input page. Run `browser_navigate` with url `http://127.0.0.1:4173/docs/components/input`, then `browser_lock` with action `lock`, then `browser_snapshot`. The textbox named `Email` is present with placeholder `you@company.com` and an empty value. The textbox named `Workspace URL` is disabled and its value is `sector23.dev/acme`.
- **Type.** Type into the textbox. Run `browser_type` on the snapshot ref whose role is `textbox` and name is `Email`, with text `ada@sector23.dev`. The textbox value is `ada@sector23.dev`.
- **Proof.** Save the snapshot after typing to `artifacts/input/typed.aria.txt` and copy a screenshot to `artifacts/input/typed.png`. Both show Sector23 and `ada@sector23.dev`.

## Gotchas

- The page has several textboxes, so match `Email` by name and not by position.
- `Medium` is the middle size input. Its placeholder is `Medium (default)`.
- File inputs use the textbox role and report readonly. Their names are `Small file`, `Medium file`, and `Large file`. Match `Email` by name.
- `d` would type into Email. This page is not a theme page.
