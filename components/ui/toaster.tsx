import { useToast } from '@/app/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export function Toaster() {
  // Adjust this line according to what useToast actually returns.
  // For example, if you want to show nothing or a placeholder:
  // const { toast } = useToast();
  // return null;

  // If you want to keep the Toaster component, you may need to get the toasts from a different source,
  // or update your useToast hook to return the toasts array.
  // For now, here's a placeholder to avoid the error:
  const toasts: any[] = [];

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
