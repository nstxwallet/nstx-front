"use client";
import { useState, useEffect } from "react";
import * as Comp from "@radix-ui/react-dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import "./dropdown.css";

interface DropdownProps {
  options: {
    label: string;
    value?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
  }[];
  iconDropdown?: React.ReactNode;
}

const Dropdown = ({ options, iconDropdown }: DropdownProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Comp.Root>
      <Comp.Trigger className="DropdownTrigger">
        {iconDropdown || <FaChevronDown className="DropdownIcon" />}
      </Comp.Trigger>
      <Comp.Portal>
        <Comp.Content
          className={`DropdownContent ${isMobile ? "DropdownMobile" : "DropdownDesktop"}`}
          data-state="closed"
        >
          <div className="DropdownList">
            {options.map((option, index) => (
              <Comp.Item
                key={option.value || `${index}-${option.label}`}
                onSelect={option.onClick}
                disabled={option.isDisabled}
                className={`DropdownItem ${option.isDisabled ? "DropdownItemDisabled" : ""}`}
              >
                {option.icon && <span className="DropdownItemIcon">{option.icon}</span>}
                <span>{option.label}</span>
                {option.children}
              </Comp.Item>
            ))}
          </div>
        </Comp.Content>
      </Comp.Portal>
    </Comp.Root>
  );
};

export { Dropdown };
