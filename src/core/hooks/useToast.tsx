import { useServices } from "@/core";

interface showToastProps {
  title?: string | null | undefined;
  description?: string | null | undefined;
  actionText?: string;
  onActionClick?: () => void;
}

export const useToast = () => {
  const { toastService } = useServices();

 const toast = ({ title, description, actionText, onActionClick }: showToastProps) => {
  toastService.showToast(
    title ?? "No title",
    description ?? "No description",
    actionText,
    onActionClick,
  );
};

  return { toast };
};
