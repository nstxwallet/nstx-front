import type React from "react";

interface PaperProps {
  color?: "transparent" | "secondary" | "primary";
  type?: "rounded" | "square";
  border?: boolean;
  variant?: "default" | "gradient";
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "between" | "around";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Paper = ({
  color = "secondary",
  type = "rounded",
  border = true,
  variant = "default",
  align,
  justify,
  className = "",
  children,
  onClick,
}: PaperProps) => {
  const baseStyles = "flex flex-col w-full space-y-4 p-6 transition-all duration-300";
  const borderStyle = border ? "border-b-2" : "";

  const variantStyles = {
    default:
      color === "transparent" ? "bg-transparent border border-zinc-200 dark:border-zinc-700" : "",
    gradient: "bg-gradient-to-br from-teal-400 to-teal-900 p-8 dark:from-teal-700 dark:to-teal-900",
  };

  const colorStyles = {
    transparent: "bg-transparent",
    secondary: "border-b-2 border-gray-300 bg-zinc-100 dark:bg-zinc-800 dark:border-gray-500",
    primary: "border-b-2 border-amber-500 bg-amber-100 dark:bg-amber-800 dark:border-amber-400",
  };

  const typeStyles = {
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  return (
    <div
      onClick={onClick}
      className={[
        baseStyles,
        justify ? `justify-${justify}` : "",
        align ? `items-${align}` : "",
        borderStyle,
        variantStyles[variant],
        typeStyles[type],
        colorStyles[color],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};
