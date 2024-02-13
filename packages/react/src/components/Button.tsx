import { forwardRef, ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          "flex items-center justify-center  rounded-full px-4  py-2 text-3xl",
          className,
          variant === "primary" && "bg-onyx-600 text-slate-100",
          variant === "secondary" && "bg-red-500 text-black",
          variant === "tertiary" && "bg-orange-500 text-green-400",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export { Button };
