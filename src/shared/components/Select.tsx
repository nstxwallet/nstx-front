import { Typography } from "@/shared";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Comp from "@radix-ui/react-select";
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export const Select = ({ options, placeholder, value, onChange, label }: SelectProps) => {
  return (
    <div className="space-y-2">
      {label && <Typography variant="body2" className="text-blue-500">{label}</Typography>}
      <Comp.Root value={value} onValueChange={onChange}>
        <Comp.Trigger className="inline-flex h-[40px] w-full items-center justify-between rounded-md border border-blue-600 bg-white p-2 text-[13px] leading-none text-teal-600 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-blue-50 focus:shadow-[0_0_0_2px] focus:shadow-blue-500 data-[placeholder]:text-blue-400">
          <Comp.Value placeholder={placeholder} />
          <Comp.Icon className="text-blue-500">
            <ChevronDownIcon />
          </Comp.Icon>
        </Comp.Trigger>
        <Comp.Portal>
          <Comp.Content className="overflow-hidden rounded-md border border-blue-600 bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Comp.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-teal-300">
              <ChevronUpIcon />
            </Comp.ScrollUpButton>
            <Comp.Viewport className="bg-white p-[5px]">
              {options?.map((option) => (
                <Comp.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-black data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-100 data-[disabled]:text-blue-300 data-[highlighted]:text-blue-900 data-[highlighted]:outline-none"
                >
                  <Comp.ItemText>{option.label}</Comp.ItemText>
                  <Comp.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                    <CheckIcon />
                  </Comp.ItemIndicator>
                </Comp.Item>
              ))}
            </Comp.Viewport>
            <Comp.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-blue-500">
              <ChevronDownIcon />
            </Comp.ScrollDownButton>
          </Comp.Content>
        </Comp.Portal>
      </Comp.Root>
    </div>
  );
};
