import { type FC, type ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ServicesContext } from "../provider";
import { ToastComponent } from "./Toast";

interface ToastContextType {
  showToast: (
    title: string,
    description: string,
    actionText?: string,
    onActionClick?: () => void,
  ) => void;
  closeToast: () => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const { toastService } = useContext(ServicesContext) || {};

  const [toastState, setToastState] = useState<{
    open: boolean;
    title: string;
    description: string;
    actionText?: string;
    onActionClick?: () => void;
  }>({
    open: false,
    title: "",
    description: "",
  });

  useEffect(() => {
    if (!toastService) {
      return;
    }

    const subscription = toastService.toastState$.subscribe((state) => {
      setToastState(state);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toastService]);

  const showToast = (
    title: string,
    description: string,
    actionText?: string,
    onActionClick?: () => void,
  ) => {
    toastService?.showToast(title, description, actionText, onActionClick);
  };

  const closeToast = () => {
    toastService?.closeToast();
  };

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {children}
      <ToastComponent
        open={toastState.open}
        onOpenChange={closeToast}
        title={toastState.title}
        description={toastState.description}
        actionText={toastState.actionText || ""}
        onActionClick={toastState.onActionClick}
      />
    </ToastContext.Provider>
  );
};
