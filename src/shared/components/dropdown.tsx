"use client";

import * as Comp from "@radix-ui/react-dropdown-menu";
import type React from "react";
import { FaChevronDown } from "react-icons/fa";

type DropdownProps = {
  options: Array<{
    label: string;
    value?: string;
    onClick?: () => void;
    isDisabled?: boolean;
    separator?: boolean;
    icon?: React.ReactNode;
  }>;
  iconDropdown?: React.ReactNode;
};

const Dropdown = ({ options, iconDropdown }: DropdownProps) => (
  <Comp.Root>
    <Comp.Trigger className="px-3 py-2 transition-all duration-200 flex items-center justify-between text-gray-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400">
      {iconDropdown || <FaChevronDown className="w-4 h-4 text-gray-900 dark:text-white" />}
    </Comp.Trigger>
    <Comp.Portal>
      <Comp.Content
        style={{ width: "100vw", top: "100%", height: "100vh" }}
        className="transition-all duration-200 ease-in-out max-w-[400px] transform lg:max-w-[220px] p-2 space-y-2
        bg-gray-100 dark:bg-zinc-900 dark: border-none border border-gray-300 dark:border-zinc-700 shadow-lg "
      >
        {options.map((option, index) => (
          <Comp.Item
            key={option.value || `${index}-${option.label}`}
            onSelect={option.onClick}
            disabled={option.isDisabled}
            className={`px-4 py-3 text-sm xs:text-base transition-all duration-200 flex items-center space-x-4 hover:cursor-pointer 
              hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-black 
              ${
                option.isDisabled
                  ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  : "text-gray-900 dark:text-white"
              }`}
          >
            {option.icon && (
              <span className="w-6 h-6 text-amber-500 dark:text-amber-400">{option.icon}</span>
            )}
            <span>{option.label}</span>
          </Comp.Item>
        ))}
        {options.some((option) => option.separator) && (
          <Comp.Separator className="my-2 border-t border-gray-300 dark:border-amber-400" />
        )}
        <Comp.Arrow className="fill-gray-300 dark:fill-zinc-900" />
      </Comp.Content>
    </Comp.Portal>
  </Comp.Root>
);

export { Dropdown };
