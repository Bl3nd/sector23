---
nextjs:
  metadata:
    title: Avatar
    description: A user's profile picture, initials, or icon.
---

{% component-demo component="avatar-default" /%}

## Examples

### Size

To change the size, use the `size` prop on `Avatar`. It accepts `sm`, `md`, or `lg` and defaults to `md`. Text and icons inside the avatar scale with it.

{% component-demo component="avatar-size" /%}

### Fallback

To show initials while the image loads or after it fails, use `AvatarFallback` next to `AvatarImage`.

To wait before showing the fallback, use the `delay` prop on `AvatarFallback`. The delay is in milliseconds and defaults to `0`. A delay such as `600` stops the initials from flashing before a fast image appears.

_Note:_ By default, the image mounts only after it loads. A failed image never mounts, so `onError` on `AvatarImage` does **not** run. To react to a failed load, use `onLoadingStatusChange` and check for `"error"`.

### Initials and icons

To show initials or an icon with no image, place them directly inside `Avatar`.

_Note:_ Do not pair children placed directly inside `Avatar` with an `AvatarImage`. They stay mounted under the loaded image. Use `AvatarFallback` instead, which unmounts once the image loads.

### Keep mounted

To render the image with `next/image`, use the `keepMounted` prop on `AvatarImage` and pass the image through `render`. The same prop makes `loading="lazy"` work. Place `AvatarFallback` before `AvatarImage` so the image covers it once it loads.

To learn more about this behavior, visit Base UI's [optimized and lazy-loaded images](https://base-ui.com/react/components/avatar#optimized-and-lazy-loaded-images).

## Credits

### Base UI

This component is based on Base UI's [Avatar](https://base-ui.com/react/components/avatar). You can view the full API reference [here](https://base-ui.com/react/components/avatar#api-reference).
