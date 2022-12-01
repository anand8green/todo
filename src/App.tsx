import { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('')

  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
      <h3>Pending List</h3>
      <h3>Completed List</h3>
    </div>
  )
}

export default App
