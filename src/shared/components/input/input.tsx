import * as React from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";

import { useTheme } from "@/shared";
import { cn } from "../../utils";
import "./input.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { theme } = useTheme();
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "InputBase",
          theme === "dark" ? "InputDark" : "InputLight",
          props.disabled && "InputDisabled",
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
          customInput={(props) => (
            <Input {...props} className={cn(theme === "dark" ? "InputDark" : "InputLight")} />
          )}
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
