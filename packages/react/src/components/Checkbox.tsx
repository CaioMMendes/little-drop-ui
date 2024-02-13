import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {}

export const Checkbox = ({ className, ...rest }: CheckboxProps) => (
  <CheckboxRadix.Root
    className={twMerge(
      //todo arrumar a parada do data-state=checked do tailwind
      "flex h-6 w-6 items-center justify-center rounded-md border border-onyx-600 bg-zinc-50   data-[state=checked]:bg-onyx-600 ",
      // 'data-[state=checked]:' // checked state
      // 'disabled:data-[state=checked]', // disabled checked state
      //   "data-[state=checked]:bg-onyx-600",
      className,
    )}
    {...rest}
  >
    <CheckboxRadix.Indicator asChild>
      <CheckIcon className="leading-none text-zinc-50" />
    </CheckboxRadix.Indicator>
  </CheckboxRadix.Root>
);

Checkbox.displayName = "Checkbox";
