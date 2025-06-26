"use client";

import { useState } from "react";

export default function JournalEditor({ onSave }: { onSave?: () => void }) {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting Entry", { content, tags });

    const res = await fetch("/api/test/entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, tags: tags.split(",") }),
    });

    if (res.ok) {
      setContent("");
      setTags("");
      if (onSave) onSave();
    } else {
      console.error("Error saving entry", await res.json());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <textarea
        className="w-full p-3 border rounded"
        rows={5}
        placeholder="What's on your mind today?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded"
      >
        Save Entry
      </button>
    </form>
  );
}
