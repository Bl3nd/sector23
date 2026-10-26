"use client";

import {
  Avatar as BaseAvatar,
  type ImageLoadingStatus,
} from "@base-ui/react/avatar";
import { createContext, useContext } from "react";

import { mergeSlotClassName } from "@/registry/sector23/lib/merge-base-ui";

import { avatar, type AvatarVariantProps } from "./avatar.style";

type AvatarContext = AvatarVariantProps;

const AvatarContext = createContext<AvatarContext>({
  size: "md",
});

function useAvatar() {
  return useContext(AvatarContext);
}

type AvatarImageLoadingStatus = ImageLoadingStatus;

function Avatar({
  size,
  className,
  children,
  ...props
}: BaseAvatar.Root.Props & AvatarVariantProps) {
  return (
    <AvatarContext.Provider value={{ size }}>
      <BaseAvatar.Root
        data-slot="avatar"
        className={mergeSlotClassName(avatar({ size }).root, className)}
        {...props}
      >
        {children}
      </BaseAvatar.Root>
    </AvatarContext.Provider>
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
  const { size } = useAvatar();

  return (
    <BaseAvatar.Fallback
      data-slot="avatar-fallback"
      className={mergeSlotClassName(avatar({ size }).fallback, className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarImageLoadingStatus };
