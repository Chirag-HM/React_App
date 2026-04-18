import Todoitem from "./Todoitem";

export default function Todolist({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-neutral-500 italic border border-dashed border-neutral-700 rounded-xl">
        No tasks yet! Start by adding something.
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo, index) => (
        <Todoitem 
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}