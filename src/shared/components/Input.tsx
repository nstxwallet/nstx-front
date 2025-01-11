import * as React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

import { cn } from '../utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export type NumberInputProps = Omit<NumericFormatProps, 'type'> &
  Omit<InputProps, 'ref' | 'value' | 'defaultValue' | 'type' | 'onChange'> & {
    defaultValue?: string | number
    value?: string | number
    decimalSeparator?: string
  }

const NumberInput = React.memo(
  React.forwardRef<HTMLInputElement, NumberInputProps>(
    ({ decimalScale = 9, allowNegative = false, onChange, ...rest }, ref) => {
      return (
        <NumericFormat
          getInputRef={ref}
          customInput={Input}
          allowNegative={allowNegative}
          onValueChange={({ value }) => {
            onChange?.({
              target: { value },
            } as React.ChangeEvent<HTMLInputElement>)
          }}
          {...rest}
          thousandSeparator=","
          decimalSeparator="."
          allowedDecimalSeparators={[',', '.']}
          decimalScale={decimalScale}
        />
      )
    },
  ),
)

export { Input, NumberInput }
