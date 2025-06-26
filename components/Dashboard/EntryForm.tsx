import { useState } from "react";

const EntryForm = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) {
      setError("Please enter some text");
      return;
    }

    // Submit the form data (you can replace this with an actual API call)
    console.log("New entry:", content);

    setContent(""); // Clear the form after submission
    setError(""); // Clear error
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry here..."
        className="w-full p-4 border border-gray-300 rounded mb-4"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Entry
      </button>
    </form>
  );
};

export default EntryForm;
