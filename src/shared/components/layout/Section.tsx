import type React from "react";

interface SectionProps {
	title?: string;
	children?: React.ReactNode;
	size?: "sm" | "md" | "lg";
	className?: string;
}

export const Section = ({
	className,
	title,
	children,
	size = "md",
}: SectionProps) => {
	const sizeClasses = {
		sm: "max-w-sm",
		md: "max-w-md",
		lg: "max-w-lg",
	};

	return (
		<div className={`w-full ${sizeClasses[size]} mb-12 p-4 ${className}`}>
			{title && (
				<h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
			)}
			{children}
		</div>
	);
};
