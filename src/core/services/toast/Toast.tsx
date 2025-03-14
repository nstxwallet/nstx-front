import * as Toast from "@radix-ui/react-toast";
import styles from "./Toast.module.css";

interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  actionText: string;
  actionAltText?: string;
  className?: string;
}

export const ToastComponent = ({
  open,
  onOpenChange,
  title,
  description,
  actionText,
  actionAltText,
  className = "",
}: ToastProps) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className={`${styles.toastRoot} ${className}`}
        open={open}
        onOpenChange={onOpenChange}
      >
        <Toast.Title className={styles.toastTitle}>{title}</Toast.Title>
        <Toast.Description asChild>
          <time className={styles.toastDescription} dateTime={new Date().toISOString()}>
            {description}
          </time>
        </Toast.Description>
        {actionText && (
          <Toast.Action className={styles.toastAction} asChild altText={actionAltText || "Undo"}>
            <button type="button" className={styles.toastButton}>
              {actionText}
            </button>
          </Toast.Action>
        )}
      </Toast.Root>
      <Toast.Viewport className={styles.toastViewport} />
    </Toast.Provider>
  );
};
