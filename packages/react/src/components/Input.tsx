import {
  ComponentPropsWithoutRef,
  LegacyRef,
  ReactNode,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: boolean;
}

export interface InputContainerProps extends ComponentPropsWithoutRef<"div"> {
  error?: boolean;
  errorMessage?: string;
  errorNoWrap: boolean;
}

export interface InputLabelProps extends ComponentPropsWithoutRef<"label"> {
  children: ReactNode;
}
export interface InputLabelTextProps extends ComponentPropsWithoutRef<"p"> {
  children: ReactNode;
}

const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "flex rounded-lg  border  border-onyx-400 bg-onyx-600  p-2 text-sm font-normal text-zinc-50 placeholder-onyx-400 placeholder-opacity-70 outline-none transition-all focus:outline-none",
          className,
          error ? "border-red-500" : "focus:ring-1 focus:ring-onyx-300",
        )}
        {...props}
      />
    );
  },
);

const InputContainer = forwardRef(
  (
    {
      className,
      error,
      errorMessage,
      errorNoWrap = true,
      children,
      ...rest
    }: InputContainerProps,
    ref: LegacyRef<HTMLDivElement>,
  ) => {
    const inputContainerClassName = twMerge(className, "flex flex-col gap-1");

    return (
      <div className={inputContainerClassName} {...rest} ref={ref}>
        {children}
        {error && errorMessage && (
          <span
            className={`mt-1 truncate text-xs text-red-500 ${errorNoWrap && "text-nowrap"} `}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

const InputLabel = ({ className, children, ...rest }: InputLabelProps) => {
  const InputLabelClassName = twMerge(
    "flex w-full items-center justify-start flex-col gap-1",
    className,
  );

  return (
    <label className={InputLabelClassName} {...rest}>
      {children}
    </label>
  );
};

const InputLabelText = ({
  className,
  children,
  ...rest
}: InputLabelTextProps) => {
  const InputLabelTextClassName = twMerge(
    "flex w-full items-center justify-start text-base truncate text-zinc-50",
    className,
  );

  return (
    <p className={InputLabelTextClassName} {...rest}>
      {children}
    </p>
  );
};

export { Input, InputContainer, InputLabelText, InputLabel };