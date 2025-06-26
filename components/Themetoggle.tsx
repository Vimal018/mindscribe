// components/Themetoggle.tsx
"use client";

import { useTheme } from "@/app/themecontext"; // Make sure it's importing the correct context
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from context

  return (
    <Button
      onClick={toggleTheme} // Call toggleTheme instead of setTheme
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
