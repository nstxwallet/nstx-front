"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "@/shared";

interface DropdownProps {
  options: OptionProps[];
  buttonIcon: React.ReactNode;
  buttonLabel?: string;
  isProfileDropdown?: boolean;
}

interface OptionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const DropdownMobile = ({ options, buttonIcon, buttonLabel }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Button
        variant="outlined"
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
        onClick={toggleDropdown}
      >
        {buttonIcon}
        {buttonLabel && <span className="ml-4">{buttonLabel}</span>}
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center z-50 p-4">
          <Button variant="outlined" type="button" className="self-end" onClick={toggleDropdown}>
            ✖
          </Button>
          <div className="w-full max-w-md">
            <div className="space-y-2">
              {options.map((option) => (
                <Option key={option.label} {...option} />
              ))}
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
    className="flex items-center w-full p-3 hover:bg-gray-100 transition"
  >
    <span className="flex items-center justify-center text-gray-600 text-lg w-6 h-6">{icon}</span>
    <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
  </button>
);
