import React from "react";

interface LoadingProps {
	size?: "small" | "medium" | "large";
	color?: string;
}

const sizeClasses = {
	small: "w-6 h-6 border-2",
	medium: "w-12 h-12 border-4",
	large: "w-16 h-16 border-4",
};

export const Loading = ({
	size = "medium",
	color = "border-cyan-500",
}: LoadingProps) => {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div
				className={`animate-spin rounded-full border-t-transparent ${color} ${sizeClasses[size]} border-solid border-gray-200`}
			/>
		</div>
	);
};
