import React from "react";
import * as Comp from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxProps {
    label: string;
    id: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox  = ({ label, id, checked, onChange } : CheckboxProps ) => {
    return (
        <div className="flex items-center">
            <Comp.Root
                className="flex h-[25px] w-[25px] appearance-none items-center justify-center rounded bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
                checked={checked}
                onCheckedChange={onChange}
                id={id} 
            >
                <Comp.Indicator className="text-violet11">
                    <CheckIcon />
                </Comp.Indicator>
            </Comp.Root>
            <label
                className="pl-[15px] text-[15px] leading-none text-white"
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
