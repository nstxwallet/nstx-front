import type React from "react";

interface StackProps {
	children: React.ReactNode;
	direction?: "horizontal" | "vertical";
	spacing?: string;
	className?: string;
}

export const Stack = ({
	children,
	direction = "vertical",
	spacing = "space-y-4",
	className = "",
}: StackProps) => {
	const flexDirection =
		direction === "horizontal" ? "flex-row space-x-4" : "flex-col";

	return (
		<div className={`flex ${flexDirection} ${spacing} ${className}`}>
			{children}
		</div>
	);
};
