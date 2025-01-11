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
      className={`flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-zinc-800 rounded-lg shadow-lg space-y-4 sm:space-y-0 sm:space-x-6 hover:bg-gray-700 transition-colors duration-300 cursor-pointer ${className}`}
    >
      <div className="flex-shrink-0 text-blue-500 text-3xl sm:text-4xl">{icon}</div>
      <div className="text-center sm:text-left flex flex-col items-center sm:items-start space-y-2">
        <Typography variant="h5">
          {title && title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </Typography>
        <Typography variant="body2" className="text-sm sm:text-base text-gray-400">
          {description}
        </Typography>
      </div>
    </Paper>
  );
};
