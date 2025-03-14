"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { ElementRef, forwardRef } from "react";
import { cn } from "../utils";

const textVariants = cva("text-gray-900 dark:text-gray-100 font-normal text-left break-words", {
  variants: {
    size: {
      h1: "text-4xl ",
      h2: "text-3xl ",
      h3: "text-2xl ",
      h4: "text-xl",
      h5: "text-lg",
      caption: "text-sm ",
      body: "text-base",
      body1: "text-sm",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    size: "body1",
    weight: "normal",
    align: "left",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = forwardRef<ElementRef<"p">, TextProps>(
  ({ className, size, weight, align, asChild, ...props }, ref) => {
    const Comp = asChild ? "span" : "p";
    return (
      <Comp ref={ref} className={cn(textVariants({ size, weight, align }), className)} {...props} />
    );
  },
);

Text.displayName = "Text";

export { Text, textVariants };
