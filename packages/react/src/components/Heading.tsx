import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Primary UI component for user interaction
 */
export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = "h2", className, children, ...rest }, ref) => {
    const HeadingTag = level;

    return (
      <HeadingTag
        className={twMerge(
          "flex items-center justify-center rounded-lg p-3",
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </HeadingTag>
    );
  },
);

Heading.displayName = "Heading";
