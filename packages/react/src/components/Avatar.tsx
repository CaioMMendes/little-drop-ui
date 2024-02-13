import { ReactNode, forwardRef } from "react";
import {
  Avatar as AvatarContainer,
  AvatarFallback as AvatarFallbackRadix,
  AvatarFallbackProps,
  AvatarImage as AvatarImageRadix,
  AvatarImageProps,
  AvatarProps as AvatarContainerProps,
} from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";
import { UserIcon } from "lucide-react";

export type AvatarProps = AvatarContainerProps & {
  children: ReactNode;
};

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <AvatarContainer
        className={twMerge(
          "flex size-12 items-center justify-center overflow-hidden rounded-full",
          className,
        )}
        {...rest}
        ref={ref}
      >
        {children}
      </AvatarContainer>
    );
  },
);

const AvatarImage = ({ className, ...rest }: AvatarImageProps) => {
  return (
    <AvatarImageRadix
      className={twMerge("size-full border-inherit object-cover ", className)}
      {...rest}
    />
  );
};

const AvatarFallback = ({
  className,
  children = <UserIcon size={24} />,
}: AvatarFallbackProps) => {
  return (
    <AvatarFallbackRadix
      delayMs={600}
      className={twMerge(
        "flex size-full items-center justify-center bg-zinc-600 text-zinc-300",
        className,
      )}
    >
      {children}
    </AvatarFallbackRadix>
  );
};

export { Avatar, AvatarImage, AvatarFallback };

Avatar.displayName = "Avatar";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";
