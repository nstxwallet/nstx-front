"use client";

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Comp from "@radix-ui/react-select";
import React from "react";

interface SelectProps {
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  search?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

const Select = ({ options, placeholder, value, onChange, searchQuery = "" }: SelectProps) => {
  const filteredOptions = searchQuery
    ? options.filter((option) => option.toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  return (
    <Comp.Root value={value} onValueChange={onChange}>
      <Comp.Trigger className="SelectTrigger">
        <Comp.Value placeholder={placeholder} />
        <Comp.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Comp.Icon>
      </Comp.Trigger>

      <Comp.Portal>
        <Comp.Content className="SelectContent">
          <Comp.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Comp.ScrollUpButton>

          <Comp.Viewport className="SelectViewport">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <Comp.Item key={option} value={option} className="SelectItem">
                  <Comp.ItemText>{option}</Comp.ItemText>
                  <Comp.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                  </Comp.ItemIndicator>
                </Comp.Item>
              ))
            ) : (
              <div className="p-3 text-sm text-gray-500">No results found</div>
            )}
            <Comp.Separator className="SelectSeparator" />
          </Comp.Viewport>
          <Comp.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Comp.ScrollDownButton>
        </Comp.Content>
      </Comp.Portal>
    </Comp.Root>
  );
};

Select.displayName = "Select";

export { Select };
