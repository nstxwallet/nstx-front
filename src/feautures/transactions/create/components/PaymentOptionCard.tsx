import { Paper, Row, Typography } from "@/shared";
import type React from "react";

interface ReplenishCardProps {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export const PaymentOptionCard = ({
	title,
	description,
	icon,
	onClick,
	className,
}: ReplenishCardProps) => {
	return (
		<Paper
			onClick={onClick}
			className={`flex flex-col md:flex-row p-6 bg-zinc-800 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-6 hover:bg-gray-700 transition-colors duration-300 cursor-pointer ${className}`}
		>
			<div className="flex-shrink-0 text-blue-500 text-4xl">{icon}</div>
			<Row>
				<Typography variant="h5">
					{title && title.length > 30 ? `${title.slice(0, 30)}...` : title}
				</Typography>
				<Typography variant="body2">{description}</Typography>
			</Row>
		</Paper>
	);
};
