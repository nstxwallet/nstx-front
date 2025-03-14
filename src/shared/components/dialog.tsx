import * as Comp from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";

import { Button } from "./button";
import "./dialog.css";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
  onSave: () => void;
  saveButtonText?: string;
}

const Dialog = ({
  open,
  setOpen,
  title,
  description,
  children,
  onSave,
  saveButtonText = "Save Changes",
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
          <Comp.Description className="DialogDescription">{description}</Comp.Description>
          <div className="DialogBody">{children}</div>
          <div className="DialogFooter">
            <Button type="button" variant="transparent" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={onSave}>
              {saveButtonText}
            </Button>
          </div>
        </Comp.Content>
      </Comp.Portal>
    </Comp.Root>
  );
};

Dialog.displayName = "Dialog";

export { Dialog };
