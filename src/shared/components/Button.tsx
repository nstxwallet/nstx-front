import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { Loading } from "./Loading";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center font-light rounded-lg shadow-md transition focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
        secondary:
          "bg-amber-400 border border-amber-600 text-white hover:bg-amber-600 focus:ring-amber-500",
        transparent: "bg-transparent border border-gray-700 hover:bg-gray-900 focus:ring-blue-300",
        danger: "bg-red-500 border border-red-500 text-white hover:bg-red-400 focus:ring-red-300",
        bordered: "border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-300",
        outlined: "border-none border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-300",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      fullWidth = false,
      asChild = false,
      loading = false,
      variant,
      size,
      icon,
      iconPosition = "left",
      className,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? "span" : "button";
    const mainClassName = [buttonVariants({ variant, size }), fullWidth && "w-full", className]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={mainClassName} {...props}>
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {loading && <Loading />}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </Component>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
