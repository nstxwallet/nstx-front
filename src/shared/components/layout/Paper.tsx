import type React from "react";

interface PaperProps {
	color?: "transparent" | "secondary" | "danger" | "primary";
	elevation?: 1 | 2 | 3;
	space?: 1 | 2 | 3;
	type?: "rounded" | "square";
	border?: boolean;
	variant?: "default" | "gradient";
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Paper = ({
	color = "secondary",
	elevation = 2,
	space = 3,
	type = "rounded",
	border = true,
	variant = "default",
	className = "",
	children,
	onClick,
}: PaperProps) => {
	const colorStyles = {
		primary: "bg-gray-200 border-blue-500",
		secondary: "bg-zinc-800 border-blue-500",
		danger: "bg-red-100 border-red-500",
		transparent: "bg-none border-zinc-500 border-1",
	};

	const elevationStyles = {
		1: "shadow-md",
		2: "shadow-lg",
		3: "shadow-xl",
	};

	const spaceStyles = {
		1: "p-4",
		2: "p-6",
		3: "p-8",
	};

	const typeStyles = {
		rounded: "rounded-lg",
		square: "rounded-none",
	};

	return (
		<div
			onClick={onClick}
			className={`w-full space-y-4
			 shadow-lg rounded-lg ${border ? "border-b-2" : ""} ${
					variant === "gradient"
						? "bg-gradient-to-br from-blue-400 to-cyan-900 p-8"
						: colorStyles[color]
				} ${elevationStyles[elevation]} ${spaceStyles[space]} ${typeStyles[type]} ${className}`}
		>
			{children}
		</div>
	);
};
