import { ClassValue } from "class-variance-authority/types";
import type React from "react"; 
import clsx from "clsx";
import { twMerge } from "tailwind-merge";


export const handleCopy = (e: React.MouseEvent, text: string | undefined): void => {
  e.preventDefault();
  if (!text) return;
  navigator.clipboard.writeText(text); 
};

export const cn = (...inputs : ClassValue[]) : string => {
  return twMerge(clsx(inputs));
}