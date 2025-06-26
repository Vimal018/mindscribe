"use client";

import { useState, useEffect } from "react";
import JournalEditor from "@/components/JournalEditor";

export default function EntryFormPage() {
  const [savedEntries, setSavedEntries] = useState<any[]>([]); // State to hold saved entries
  const [isSaved, setIsSaved] = useState(false); // Track whether the entry was saved

  // Fetch saved entries from the backend when the page is loaded
  useEffect(() => {
    const fetchSavedEntries = async () => {
      const res = await fetch("/api/test/entry"); // Fetch the saved entries
      if (res.ok) {
        const data = await res.json();
        setSavedEntries(data); // Store the fetched entries in the state
      } else {
        console.error("Failed to fetch entries");
      }
    };

    fetchSavedEntries();
  }, [isSaved]); // Refetch when a new entry is saved

  // Callback to handle save operation
  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Reset after 3 seconds (for user feedback)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
      {/* Journal Entry Form */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Create a Journal Entry</h1>

        {/* Display success message when the entry is saved */}
        {isSaved && (
          <div className="mb-4 p-4 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 rounded-md text-center">
            Entry saved successfully!
          </div>
        )}

        {/* Journal Editor Component with save callback */}
        <JournalEditor onSave={handleSave} />
      </div>

      {/* Display saved entries */}
      {savedEntries.length > 0 && (
        <div className="w-full max-w-lg p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Saved Entries</h2>
          <div className="space-y-4 mt-4">
            {savedEntries.map((entry, index) => {
              // Format the createdAt date to show only the date
              const date = new Date(entry.createdAt).toLocaleDateString();

              return (
                <div key={index} className="p-4 border rounded-md bg-gray-100 dark:bg-gray-600 dark:text-white">
                  <p className="text-lg">{entry.content}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tags: {entry.tags.join(", ")}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sentiment: {entry.sentiment || "N/A"}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Emotion: {entry.emotions || "N/A"}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Date: {date}</p> {/* Show only the date */}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
