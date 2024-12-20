import type React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string | undefined;
	containerClassName?: string;
	fullWidth?: boolean;
	placeholder?: string;
}

export const Select = ({
	label,
	error,
	containerClassName = "",
	className = "",
	fullWidth = true,
	placeholder,
	children,
	...props
}: SelectProps) => {
	return (
		<div
			className={`flex flex-col ${fullWidth ? "w-full" : "w-auto"} ${containerClassName}`}
		>
			{label && (
				<label
					htmlFor={props.id || props.name}
					className="mb-2 text-sm font-medium text-gray-300"
				>
					{label}
				</label>
			)}
			<select
				className={`rounded-lg border px-6 py-1.5 text-gray-200 bg-zinc-800 transition-all duration-150 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-2 ${
					error
						? "border-red-500 focus:border-red-500 focus:ring-red-400"
						: "border-gray-700 focus:border-blue-500 focus:ring-blue-400"
				} ${fullWidth ? "w-full" : "w-auto"} ${className}`}
				style={{
					appearance: "none",
					WebkitAppearance: "none",
					MozAppearance: "none",
				}}
				{...props}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{children}
			</select>
			{error && <span className="mt-1 text-xs text-red-500">{error}</span>}
		</div>
	);
};
