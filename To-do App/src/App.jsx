import { useState } from 'react'
import Header from './components/Header'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  return (
    <div className="min-h-screen py-16 px-4 flex items-start justify-center">
      <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <Header />
        <Todoinput addTodo={addTodo} />
        <Todolist todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default App