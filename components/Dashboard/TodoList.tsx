import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field after adding
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="w-full p-4 border border-gray-300 rounded mb-4"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="p-2 border-b">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
