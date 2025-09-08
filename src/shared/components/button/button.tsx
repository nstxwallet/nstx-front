import { Loading } from "@/shared";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
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
        gray: "border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-black",
        primary:
          "bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400",
        secondary:
          "bg-amber-500 border border-amber-600 text-white hover:bg-amber-600 focus:ring-amber-600 dark:bg-amber-600 dark:border-amber-700 dark:hover:bg-amber-700 dark:focus:ring-amber-500",
        light:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700 dark:focus:ring-gray-500",
        transparent:
          "bg-transparent text-gray-800 hover:bg-gray-200 focus:ring-amber-500 dark:text-gray-200 dark:hover:bg-zinc-700 dark:focus:ring-amber-300 light:text-gray-800 light:hover:bg-gray-200 light:focus:ring-amber-500",
        danger:
          "bg-red-500 border border-red-500 text-white hover:bg-red-400 focus:ring-red-300 dark:bg-red-600 dark:border-red-600 dark:hover:bg-red-500 dark:focus:ring-red-400",
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
    const mainClassName = [
      buttonVariants({ variant, size }),
      fullWidth && "w-full",
      !children && "p-2 flex items-center justify-center",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={mainClassName} {...props}>
        {icon && !children ? (
          <span className="flex items-center justify-center w-full">{icon}</span>
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {loading && <Loading />}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
