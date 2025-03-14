import { Paper, Row, Text } from "@/shared";
import type { ReactNode } from "react";

interface OptionProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const TransactionOption = ({
  title,
  description,
  icon,
  onClick,
  className = "",
}: OptionProps) => (
  <Paper
    onClick={onClick}
    aria-label={title}
    type="rounded"
    className={`relative flex flex-col p-4 transition-all duration-300 cursor-pointer ${className}`}
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:h-2" />
    <Row justify="start" className="gap-x-4 items-center">
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-700 text-blue-400 text-3xl shadow-md group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
      )}
      {title && <Text size="h5">{title}</Text>}
    </Row>
    {description && <Text size="body1">{description}</Text>}
  </Paper>
);
