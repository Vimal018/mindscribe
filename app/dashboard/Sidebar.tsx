"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/themecontext"; // Adjust import path if necessary
import { useState } from "react"; // Import useState for sidebar toggle
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the toggle button

const links = [
  { name: "Journal Entry", href: "/dashboard/entry-form" },
  { name: "Sentiment Chart", href: "/dashboard/sentiment-chart" },
  { name: "Pie Chart", href: "/dashboard/pie-chart" },
  { name: "To-Do List", href: "/dashboard/todo" },
  { name: "Notes", href: "/dashboard/notes" },
  { name: "Filters", href: "/dashboard/filters" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Sidebar visibility state

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Sidebar toggle button (icon only) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-10 bg-gray-800 text-white p-2 rounded-full"
      >
        {isSidebarVisible ? <FaTimes /> : <FaBars />} {/* Show "X" when sidebar is visible, "hamburger" when hidden */}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <aside
          className={cn(
            "w-64 h-screen sticky top-0 border-r p-4 shadow-lg transition-transform duration-300",
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          )}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">MindScribe</h2>

          <nav className="space-y-2 mb-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition duration-200",
                  pathname === link.href
                    ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                    : "hover:bg-gray-300 hover:dark:bg-gray-800 hover:text-white text-gray-500"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </aside>
      )}
    </div>
  );
}
