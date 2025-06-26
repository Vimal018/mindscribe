// app/dashboard/layout.tsx
"use client";

import { ThemeProvider } from "@/app/themecontext";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";
import { ThemeToggleButton } from "@/components/Themetoggle";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 text-black dark:text-white">
        <SignedIn>
          {/* Header with theme toggle and user profile */}
          <header className="flex justify-between items-center gap-4 px-6 py-3 border-b">
            <div className="flex items-center gap-4">
              {/* <h1 className="text-xl font-semibold">MindScribe</h1> */}
            </div>

            {/* Theme Toggle Button */}
            <div className="ml-auto">
              <ThemeToggleButton />
            </div>

            {/* User Profile */}
            <UserButton />
          </header>

          {/* Sidebar and content */}
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </SignedIn>

        <SignedOut>
          {/* If the user is not signed in, show a message */}
          <div className="h-screen flex items-center justify-center">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              You must be signed in to view your dashboard.
            </p>
          </div>
        </SignedOut>
      </div>
    </ThemeProvider>
  );
}
