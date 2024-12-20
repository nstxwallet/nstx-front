import type React from "react";

interface ColProps {
	children: React.ReactNode;
	span?: number;
	className?: string;
	justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
	items?: "start" | "center" | "end" | "stretch";
	align?: "auto" | "start" | "center" | "end" | "stretch";
}

export const Col = ({
	children,
	span = 6,
	className = "",
	justify = "center",
	items = "center",
	align = "center",
}: ColProps) => {
	const spanClass = `col-span-${span}`;
	const justifyClass = `justify-${justify}`;
	const itemsClass = `items-${items}`;
	const alignClass = `self-${align}`;

	return (
		<div
			className={`flex  ${spanClass} ${justifyClass} ${itemsClass} ${alignClass} ${className}`}
			style={{ gridColumn: `span ${span}` }}
		>
			{children}
		</div>
	);
};
