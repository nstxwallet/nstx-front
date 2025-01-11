import * as Toast from "@radix-ui/react-toast";

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
        className={`grid grid-cols-[auto_max-content] items-center gap-x-4  border-l-2 border-blue-00
           bg-zinc-300 p-4 shadow-lg [grid-template-areas:_'title_action'_'description_action']
           transition-transform duration-200
            ease-out data-[state=open]:animate-slideIn 
            data-[swipe=end]:animate-swipeOut ${className}`}
        open={open}
        onOpenChange={onOpenChange}
      >
        <Toast.Title className="mb-1 text-sm font-medium text-gray-900 [grid-area:_title]">
          {title}
        </Toast.Title>
        <Toast.Description asChild>
          <time
            className="text-xs leading-tight text-gray-700 [grid-area:_description]"
            dateTime={new Date().toISOString()}
          >
            {description}
          </time>
        </Toast.Description>
        {actionText && (
          <Toast.Action className="[grid-area:_action]" asChild altText={actionAltText || "Undo"}>
            <button
              type="button"
              className="inline-flex h-6 items-center justify-center rounded bg-green-100 px-3 text-xs font-medium text-green-600 shadow-inner hover:bg-green-200 focus:ring-2 focus:ring-green-300"
            >
              {actionText}
            </button>
          </Toast.Action>
        )}
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-8 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-8 outline-none" />
    </Toast.Provider>
  );
};
