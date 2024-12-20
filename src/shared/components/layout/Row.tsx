import type React from "react";

interface RowProps {
	children: React.ReactNode;
	className?: string;
	align?: "start" | "center" | "end" | "between" | "around" | "evenly";
	justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
	gutter?: number;
}

export const Row = ({
	children,
	className = "",
	align = "center",
	justify = "center",
	gutter = 6,
}: RowProps) => {
	const alignClass = `items-${align}`;
	const justifyClass = `justify-${justify}`;
	const gapClass = `space-x-${gutter}`;

	return (
		<div
			className={`flex ${alignClass} ${justifyClass} ${gapClass} ${className}`}
		>
			{children}
		</div>
	);
};
