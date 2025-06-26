"use client";
import TodoList from "@/components/Dashboard/TodoList";

export default function TodoPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your To-Do List</h1>
      <TodoList />
    </div>
  );
}
