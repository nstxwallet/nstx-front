import type { ClassValue } from "class-variance-authority/types";
import clsx from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const handleCopy = (e: React.MouseEvent, text: string | undefined): void => {
  e.preventDefault();
  if (!text) {
    return;
  }
  navigator.clipboard.writeText(text);
};

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
export const slicePart = (str: string, part: string): string => {
  return str.slice(0, str.indexOf(part));
};
