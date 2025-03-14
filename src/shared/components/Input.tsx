import * as React from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";
import { useTheme } from "../layout";
import { cn } from "../utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
          theme === "dark"
            ? "border-gray-300 bg-white text-gray-800 focus:ring-amber-500 focus:border-amber-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-amber-400 dark:focus:border-amber-400"
            : "border-gray-200 bg-gray-100 text-gray-900 focus:ring-amber-300 focus:border-amber-300",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export type NumberInputProps = Omit<NumericFormatProps, "type"> &
  Omit<InputProps, "ref" | "value" | "defaultValue" | "type" | "onChange"> & {
    defaultValue?: string | number;
    value?: string | number;
    decimalSeparator?: string;
  };

const NumberInput = React.memo(
  React.forwardRef<HTMLInputElement, NumberInputProps>(
    ({ decimalScale = 9, allowNegative = false, onChange, ...rest }, ref) => {
      const { theme } = useTheme();

      return (
        <NumericFormat
          getInputRef={ref}
          customInput={(props) => <Input {...props} className={theme} />}
          allowNegative={allowNegative}
          onValueChange={({ value }) =>
            onChange?.({ target: { value } } as React.ChangeEvent<HTMLInputElement>)
          }
          {...rest}
          thousandSeparator=","
          decimalSeparator="."
          allowedDecimalSeparators={[",", "."]}
          decimalScale={decimalScale}
        />
      );
    },
  ),
);

export { Input, NumberInput };
