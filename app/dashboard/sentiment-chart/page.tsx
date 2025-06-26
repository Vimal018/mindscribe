"use client";
import { useEffect, useState } from "react";
import SentimentChart from "@/components/Charts/SentimentChart";

interface Entry {
  id: string;
  content: string;
  sentiment: string;
  emotions: string[];
  createdAt: string;
  tags: string[];
}

export default function SentimentChartPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch("/api/test/entry");
        const data = await res.json();
        setEntries(data);
      } catch (err: any) {
        setError(err.message || "Error fetching entries");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sentiment Overview</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <SentimentChart entries={entries} />}
    </div>
  );
}
