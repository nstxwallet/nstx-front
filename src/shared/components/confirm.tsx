import { Button, Paper, Text } from "@/shared";
import { Container, Grid, Separator } from "@radix-ui/themes";
import React, { type ReactNode } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  fields: { label: string; value: string | number }[];
  balanceAfterPayment?: number;
  handleCancel: () => void;
  handleConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  className?: string;
  children?: ReactNode;
}

export const ConfirmDialog = ({
  isOpen,
  title = "Confirm Action",
  fields,
  balanceAfterPayment,
  handleCancel,
  handleConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
  className,
  children,
}: ConfirmDialogProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Container size="1" className={className}>
      <Paper>
        <Text align="center">{title}</Text>
        <Separator size="4" orientation="horizontal" />
        <Grid columns={{ md: "2", sm: "1" }} gap="4">
          {fields.map(({ label, value }) => (
            <React.Fragment key={label}>
              <Text size="body1">{label}:</Text>
              <Text size="body1">{value || "N/A"}</Text>
            </React.Fragment>
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

        {children && <div className="mt-4">{children}</div>}

        <Grid columns={{ md: "2", sm: "1" }} gap="4">
          <Button onClick={handleCancel} fullWidth variant="gray">
            {cancelText}
          </Button>
          <Button onClick={handleConfirm} fullWidth variant="secondary">
            {confirmText}
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};
