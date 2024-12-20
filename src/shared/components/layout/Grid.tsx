import type React from "react";

interface GridProps {
	children: React.ReactNode;
	container?: boolean;
	className?: string;
	gap?: "sm" | "md" | "lg";
	align?: "start" | "center" | "end" | "between" | "around" | "evenly";
	justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export const Grid = ({
	children,
	className = "",
	container = false,
	gap = "md",
	align,
	justify,
}: GridProps) => {
	const gapClasses = {
		sm: "gap-6",
		md: "gap-8",
		lg: "gap-12",
	};

	const alignClasses = {
		start: "items-start",
		center: "items-center",
		end: "items-end",
		between: "items-between",
		around: "items-around",
		evenly: "items-evenly",
	};

	const justifyClasses = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
		between: "justify-between",
		around: "justify-around",
		evenly: "justify-evenly",
	};

	return (
		<div
			className={`${
				container ? "flex flex-row" : "flex flex-col"
			} min-h-screen w-full ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
		>
			{children}
		</div>
	);
};
