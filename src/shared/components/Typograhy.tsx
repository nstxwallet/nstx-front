import type React from "react";

interface TypographyProps {
	center?: boolean;
	children: React.ReactNode;
	color?: "primary" | "secondary" | "blue" | "warning" | "cyan" | "danger";
	strong?: boolean;
	italic?: boolean;
	underline?: boolean;
	delete?: boolean;
	code?: boolean;
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
	className?: string;
}

export const Typography = ({
	center = false,
	children,
	color = "primary",
	strong = false,
	italic = false,
	underline = false,
	delete: del = false,
	code = false,
	variant = "h5",
	className = "",
}: TypographyProps) => {
	const colorClasses: Record<string, string> = {
		primary: "text-gray-200",
		secondary: "text-gray-900",
		blue: "text-blue-600",
		warning: "text-yellow-500",
		cyan: "text-cyan-500",
		danger: "text-red-500",
	};

	const variantClasses: Record<string, string> = {
		h1: "text-4xl",
		h2: "text-3xl",
		h3: "text-2xl",
		h4: "text-xl ",
		h5: "text-lg ",
		h6: "text-base",
		body1: "text-base",
		body2: "text-sm",
	};

	const baseClass = `${colorClasses[color]} ${variantClasses[variant]} 
    ${strong ? "font-semibold" : ""} ${italic ? "italic" : ""} 
    ${underline ? "underline" : ""} ${
			center ? "text-center" : ""
		} ${className}`;

	const content = del ? (
		<del>{children}</del>
	) : code ? (
		<code className="rounded bg-blue-200 p-1">{children}</code>
	) : (
		children
	);

	const ComponentTag = variant.startsWith("h") ? variant : "p";

	return <ComponentTag className={baseClass}>{content}</ComponentTag>;
};
