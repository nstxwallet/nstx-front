import type React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Container = ({ children, className = "", size = 'lg'}: ContainerProps) => {
  const sizeStyles = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-8xl",
  };
  return <div className={`${sizeStyles[size]} p-12 mx-auto px-4 ${className}`}>{children}</div>;
};
