"use client";

import { Button } from "@/shared";
import { useState } from "react";
import { MdClose } from "react-icons/md";

interface DropdownProps {
  options: OptionProps[];
  buttonIcon: React.ReactNode;
  buttonLabel?: string;
}

interface OptionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isDivider?: boolean;
}

export const DropdownMobile = ({ options, buttonIcon, buttonLabel }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const closeDropdown = () => setIsOpen(false);

  return (
    <>
      <Button
        variant="transparent"
        type="button"
        className={"flex items-center bg-none justify-center w-6 h-6"}
        onClick={toggleDropdown}
      >
        {buttonIcon}
        {buttonLabel && <span className="ml-3 text-sm font-medium">{buttonLabel}</span>}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
          onClick={closeDropdown}
        >
          <div
            className="bg-white w-full h-full p-5 rounded-none shadow-none relative animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="transparent"
              type="button"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              onClick={closeDropdown}
            >
              <MdClose size={12} />
            </Button>

            <div className="mt-6 space-y-4">
              {options.map((option, index) =>
                option.isDivider ? (
                  <Divider key={`divider-${index}`} />
                ) : (
                  <Option key={option.label} {...option} />
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Option = ({ icon, label, onClick }: OptionProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition"
  >
    <span className="flex items-center justify-center text-gray-600 text-lg w-8 h-8">{icon}</span>
    <span className="ml-4 text-sm font-medium text-gray-800">{label}</span>
  </button>
);

export const Divider = () => <div className="w-full h-[1px] bg-gray-200 my-2" />;
