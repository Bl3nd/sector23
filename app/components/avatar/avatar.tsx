import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

function Avatar({ className, ...props }: BaseAvatar.Root.Props) {
  return <BaseAvatar.Root data-slot="avatar" className={className} {...props} />;
}

function AvatarImage({ className, ...props }: BaseAvatar.Image.Props) {
  return <BaseAvatar.Image data-slot="avatar-image" className={className} {...props} />;
}

function AvatarFallback({ className, ...props }: BaseAvatar.Fallback.Props) {
  return <BaseAvatar.Fallback data-slot="avatar-fallback" className={className} {...props} />;
}

export { Avatar, AvatarImage, AvatarFallback };
