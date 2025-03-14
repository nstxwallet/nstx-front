import * as Comp from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

interface CheckboxProps {
  label: string;
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({ label, id, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <Comp.Root className="CheckboxRoot" checked={checked} onCheckedChange={onChange} id={id}>
        <Comp.Indicator className="ComponentIndicator">
          <CheckIcon />
        </Comp.Indicator>
      </Comp.Root>
      <label className="ComponentLabel" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
