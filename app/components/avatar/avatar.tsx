"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

import { mergeSlotClassName } from "@/app/lib/merge-base-ui";

import { avatar, type AvatarVariantProps } from "./avatar.style";

function Avatar({ className, size, ...props }: BaseAvatar.Root.Props & AvatarVariantProps) {
  return (
    <BaseAvatar.Root
      data-slot="avatar"
      className={mergeSlotClassName(avatar({ size }).root, className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: BaseAvatar.Image.Props) {
  return (
    <BaseAvatar.Image
      data-slot="avatar-image"
      className={mergeSlotClassName(avatar().image, className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: BaseAvatar.Fallback.Props) {
  return (
    <BaseAvatar.Fallback
      data-slot="avatar-fallback"
      className={mergeSlotClassName(avatar().fallback, className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
