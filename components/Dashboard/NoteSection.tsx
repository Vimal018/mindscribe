import { useState } from "react";

const NoteSection = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState<string[]>([]);
  
    const handleSaveNote = () => {
      if (note) {
        setNotes([...notes, note]);
        setNote(""); // Clear note field after saving
      }
    };
  
    return (
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Daily Actions</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your actions for today..."
          className="w-full p-4 border border-gray-300 rounded mb-4"
        />
        <button onClick={handleSaveNote} className="bg-blue-500 text-white p-2 rounded mb-4">
          Save Note
        </button>
        <ul>
          {notes.map((note, index) => (
            <li key={index} className="p-2 border-b">{note}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NoteSection;
  