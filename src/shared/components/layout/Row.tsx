import type React from "react";

interface RowProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end" | "between" | "around" | "evenly";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gutter?: number;
}

const Row = ({ children, className = "", align, justify, gutter = 6 }: RowProps) => {
  const alignClass = align ? `items-${align}` : "";
  const justifyClass = justify ? `justify-${justify}` : "";
  const gapClass = `gap-x-${gutter}`;

  return (
    <div className={`flex ${alignClass} ${justifyClass} ${gapClass} ${className}`.trim()}>
      {children}
    </div>
  );
};

export { Row };
