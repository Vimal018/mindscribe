// components/ui/dialog.tsx
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = ({ className, ...props }: any) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <DialogPrimitive.Content
      className={cn(
        "fixed z-50 bg-white p-4 rounded-lg shadow-xl",
        className
      )}
      {...props}
    />
  </DialogPrimitive.Portal>
);
