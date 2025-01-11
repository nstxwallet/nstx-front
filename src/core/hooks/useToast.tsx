import { useServices } from "./useServices";

interface showToastProps {
  title: string;
  description: string;
  actionText?: string;
  onActionClick?: () => void;
}

export const useToast = () => {
  const { toastService } = useServices();

  const showToast = ({ title, description, actionText, onActionClick }: showToastProps) => {
    toastService.showToast(title, description, actionText, onActionClick);
  };
  return { showToast };
};
