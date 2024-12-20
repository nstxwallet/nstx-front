import type React from "react";

interface InputProps {
	id?: string;
	fullWidth?: boolean;
	name?: string;
	className?: string;
	error?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: string;
}

export const Input = ({
	id,
	name,
	className = "",
	value,
	onChange,
	placeholder,
	fullWidth = false,
	type = "text",
	error,
}: InputProps) => {
	return (
		<div className={`w-full ${fullWidth ? "w-full" : "w-auto"}`}>
			<input
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				className={`rounded-lg border px-4 py-3 text-gray-700 shadow-sm transition ${
					error
						? "border-red-500 focus:border-red-500 focus:ring-red-300"
						: "border-blue-300 focus:border-blue-500 focus:ring-blue-300"
				} bg-zinc-800 hover:border-blue-400 focus:outline-none focus:ring-2 ${
					fullWidth ? "w-full" : "w-auto"
				} ${className}`}
			/>
			{error && <p className="mt-1 text-sm text-red-500">{error}</p>}
		</div>
	);
};
