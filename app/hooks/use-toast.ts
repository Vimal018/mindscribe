// src/hooks/use-toast.ts
import { useContext, createContext } from "react"

export function useToast() {
  // Mock fallback (can be replaced with a real implementation)
  return {
    toast: ({ title, description }: { title: string; description?: string }) => {
      console.log("Toast:", title, description)
    },
  }
}
