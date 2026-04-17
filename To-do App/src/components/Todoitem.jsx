import React from 'react'

function Todoitem({Todo,index,deleteTodo}) {
  return (
    <div>
        <p>{Todo}</p>
        <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default Todoitem