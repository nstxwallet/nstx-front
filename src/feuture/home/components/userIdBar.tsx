import { Button, handleCopy } from "@/shared";
import type React from "react";

interface UserIdBarProps {
  id: string;
}

export const UserIdBar = ({ id }: UserIdBarProps) => {
  return (
    <Button
      variant="secondary"
      fullWidth
      className="z-[10] fixed top-0 left-0 w-full rounded-none justify-center text-xs 
                 bg-zinc-800 text-white border-none shadow-md py-1"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleCopy(e, id)}
    >
      {id}
    </Button>
  );
};
