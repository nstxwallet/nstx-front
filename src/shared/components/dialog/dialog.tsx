import { type ReactNode } from "react";
import * as Comp from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Container, Grid, Separator } from "@radix-ui/themes";

import { Button, Text } from "@/shared";
import "./dialog.css";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  description?: string;
  fields?: { label: string; value: string | number }[];
  balanceAfterPayment?: number;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
  saveButtonText?: string;
  children?: ReactNode;
  className?: string;
}

export const Dialog = ({
  open,
  setOpen,
  title = "Confirm Action",
  description,
  fields,
  balanceAfterPayment,
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
  saveButtonText = "Save Changes",
  children,
  className,
}: DialogProps) => {
  return (
    <Comp.Root open={open} onOpenChange={setOpen}>
      <Comp.Portal>
        <Comp.Overlay className="DialogOverlay" />
        <Comp.Content className="DialogContent">
          <div className="DialogHeader">
            <Comp.Title className="DialogTitle">{title}</Comp.Title>
            <Comp.Close asChild>
              <Button variant="transparent" className="DialogClose" onClick={() => setOpen(false)}>
                <Cross2Icon />
              </Button>
            </Comp.Close>
          </div>

          {description && (
            <Comp.Description className="DialogDescription">{description}</Comp.Description>
          )}

          <Container size="1" className={className}>
            {fields && (
              <>
                <Separator size="4" orientation="horizontal" className="mb-4" />
                <Grid columns={{ md: "2", sm: "1" }} gap="6">
                  {fields.map(({ label, value }) => (
                    <Text key={label} size="body1" className="mb-2">
                      {label}: {value || "N/A"}
                    </Text>
                  ))}
                  {balanceAfterPayment !== undefined && (
                    <>
                      <Text size="body1">Balance after payment:</Text>
                      <Text
                        size="body1"
                        className={balanceAfterPayment < 0 ? "text-red-500" : "text-green-400"}
                      >
                        {balanceAfterPayment}
                      </Text>
                    </>
                  )}
                </Grid>
              </>
            )}

            {children && <div className="mt-6">{children}</div>}

            <div className="DialogFooter">
              {onCancel && (
                <Button type="button" variant="transparent" onClick={() => setOpen(false)}>
                  {cancelText}
                </Button>
              )}
              {onConfirm && (
                <Button type="button" onClick={onConfirm}>
                  {confirmText || saveButtonText}
                </Button>
              )}
            </div>
          </Container>
        </Comp.Content>
      </Comp.Portal>
    </Comp.Root>
  );
};
