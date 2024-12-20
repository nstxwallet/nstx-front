import type React from "react";

interface FormProps {
	children: React.ReactNode;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ onSubmit, children }: FormProps) {
	return (
		<form onSubmit={onSubmit} className="flex flex-col space-y-4">
			{children}
		</form>
	);
}
