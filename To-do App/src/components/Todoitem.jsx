export default function Todoitem({ todo, index, deleteTodo }) {
  return (
    <li className="flex items-center justify-between p-4 bg-neutral-800 rounded-xl border border-neutral-700/50 hover:bg-neutral-800/80 transition-all group shadow-sm">
      <span className="text-neutral-200 text-lg break-words max-w-[85%]">{todo}</span>
      <button 
        onClick={() => deleteTodo(index)}
        className="opacity-0 group-hover:opacity-100 p-2 text-neutral-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
        aria-label="Delete Task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>
    </li>
  );
}