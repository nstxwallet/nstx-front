import { BehaviorSubject } from "rxjs";

interface ToastState {
  open: boolean;
  title?: string | JSX.Element | null | undefined | null;
  description?: string | JSX.Element | null | undefined;
  actionText?: string;
  onActionClick?: () => void;
}

export class ToastService {
  private toastSubject = new BehaviorSubject<ToastState>({
    open: false,
    title: "",
    description: "",
  });

  toastState$ = this.toastSubject.asObservable();

  showToast(title?: string, description?: string, actionText?: string, onActionClick?: () => void) {
    this.toastSubject.next({
      open: true,
      title: title ?? "",
      description: description ?? "",
      actionText,
      onActionClick,
    });
  }

  closeToast() {
    this.toastSubject.next({
      ...this.toastSubject.value,
      open: false,
    });
  }
}
