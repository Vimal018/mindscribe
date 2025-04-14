"use client";

import { useEffect, useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import JournalEditor from "@/components/JournalEditor";
import EntryCard from "@/components/EntryCard";
import SentimentChart from "@/components/SentimentChart"; // Add this line to include the chart

export default function DashboardPage() {
  interface Entry {
    id: string;
    content: string;
    sentiment: string;
    emotions: string[];
    createdAt: string;
    tags: string[];
  }

  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetching entries with sentiment and emotions
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch("/api/test/entry");
        const data = await res.json();
        console.log("Fetched data:", data);

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch entries");
        }

        if (!Array.isArray(data)) {
          throw new Error("Unexpected response format");
        }

        setEntries(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  return (
    <main className="p-4 max-w-xl mx-auto">
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">Your Journal</h1>
        <JournalEditor onSave={() => window.location.reload()} />

        {loading && <p className="text-gray-500">Loading entries...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && entries.length === 0 && (
          <p className="text-gray-500">No entries found. Start by writing one!</p>
        )}

        {!loading && !error && entries.length > 0 && (
          <>
            <SentimentChart entries={entries} /> {/* Add chart here */}
            {entries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </>
        )}
      </SignedIn>

      <SignedOut>
        <div className="text-center mt-20">
          <p className="text-lg">You must be signed in to view your journal.</p>
        </div>
      </SignedOut>
    </main>
  );
}
