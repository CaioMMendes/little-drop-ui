import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {}

export const Checkbox = ({ className, ...rest }: CheckboxProps) => (
  //   <CheckboxRadix.Root
  //     className={twMerge(
  //       " flex rounded-lg border border-zinc-500 bg-transparent p-3 data-[state=checked]:bg-red-400 ",
  //       className,
  //     )}
  //     {...rest}
  //   >
  //     <CheckboxRadix.Indicator asChild>
  //       <CheckIcon className="leading-none text-zinc-50" size={0} />
  //     </CheckboxRadix.Indicator>
  //   </CheckboxRadix.Root>
  <CheckboxRadix.Root
    className={clsx(
      "flex h-5 w-5 items-center justify-center rounded",
      "radix-state-checked:bg-purple-600 radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-gray-900",
      "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
    )}
  >
    <CheckboxRadix.Indicator>
      <CheckIcon className="h-4 w-4 self-center text-white" />
    </CheckboxRadix.Indicator>
  </CheckboxRadix.Root>
);
