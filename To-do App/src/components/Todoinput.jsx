import { useState } from "react";

export default function Todoinput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      addTodo(todo.trim());
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input 
        type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 bg-neutral-800 rounded-xl border border-neutral-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-neutral-100 placeholder-neutral-400 transition-all shadow-inner"
      />
      <button 
        type="submit"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors shadow-lg active:scale-95"
      >
        Add
      </button>
    </form>
  );
}