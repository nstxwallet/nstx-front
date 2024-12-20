import type React from "react";

interface ButtonProps {
	children: React.ReactNode;
	fullWidth?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	variant?: "primary" | "secondary" | "transparent" | "danger" | "bordered";
	size?: "sm" | "md" | "lg";
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
}

export const Button = ({
	onClick,
	fullWidth,
	children,
	type = "button",
	size = "sm",
	className = "",
	variant = "primary",
	icon,
	iconPosition = "left",
}: ButtonProps) => {
	const variantStyles = {
		primary:
			"bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
		secondary:
			"bg-amber-400 border border-amber-600 text-white hover:bg-amber-600 focus:ring-amber-500",
		transparent:
			"bg-transparent border border-gray-700 hover:bg-gray-900 focus:ring-blue-300",
		danger:
			"bg-none border-red-500 text-white hover:bg-red-400 focus:ring-red-300",
		bordered:
			"border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-300",
	};

	const baseStyles =
		"rounded-lg flex font-light shadow-md transition focus:outline-none focus:ring-2 justify-center items-center text-center";
	const sizeStyles = {
		sm: "px-4 py-1",
		md: "px-6 py-3",
		lg: "px-8 py-4",
	};

	return (
		<button
			className={`${fullWidth ? "w-full" : ""} ${variantStyles[variant]} ${
				sizeStyles[size]
			} ${className} ${baseStyles}`}
			onClick={onClick}
			type={type}
		>
			{icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
			{children}
			{icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
		</button>
	);
};
