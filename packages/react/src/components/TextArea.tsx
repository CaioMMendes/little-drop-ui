import {
  ComponentPropsWithoutRef,
  LegacyRef,
  ReactNode,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";

export interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  error?: boolean;
}

export interface TextAreaContainerProps
  extends ComponentPropsWithoutRef<"div"> {
  error?: boolean;
  errorMessage?: string;
  errorNoWrap: boolean;
}

export interface TextAreaLabelProps extends ComponentPropsWithoutRef<"label"> {
  children: ReactNode;
}
export interface TextAreaLabelTextProps extends ComponentPropsWithoutRef<"p"> {
  children: ReactNode;
}

const TextArea = forwardRef(
  (
    { className, error, ...props }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined,
  ) => {
    return (
      <textarea
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

const TextAreaContainer = forwardRef(
  (
    {
      className,
      error,
      errorMessage,
      errorNoWrap = true,
      children,
      ...rest
    }: TextAreaContainerProps,
    ref: LegacyRef<HTMLDivElement>,
  ) => {
    const textAreaContainerClassName = twMerge(
      className,
      "flex flex-col gap-1",
    );

    return (
      <div className={textAreaContainerClassName} {...rest} ref={ref}>
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

const TextAreaLabel = ({
  className,
  children,
  ...rest
}: TextAreaLabelProps) => {
  const TextAreaLabelClassName = twMerge(
    "flex w-full items-center justify-start flex-col gap-1",
    className,
  );

  return (
    <label className={TextAreaLabelClassName} {...rest}>
      {children}
    </label>
  );
};

const TextAreaLabelText = ({
  className,
  children,
  ...rest
}: TextAreaLabelTextProps) => {
  const TextAreaLabelTextClassName = twMerge(
    "flex w-full items-center justify-start text-base truncate text-zinc-50",
    className,
  );

  return (
    <p className={TextAreaLabelTextClassName} {...rest}>
      {children}
    </p>
  );
};

export { TextArea, TextAreaContainer, TextAreaLabelText, TextAreaLabel };
