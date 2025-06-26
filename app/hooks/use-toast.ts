// src/hooks/use-toast.ts
import { toast as sonnerToast } from "sonner"

type ToastOptions = {
  title: string
  description?: string
}

export function useToast() {
  function toast({ title, description }: ToastOptions) {
    sonnerToast(`${title}${description ? ` - ${description}` : ""}`)
  }

  return { toast }
}
