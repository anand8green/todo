import { useState } from 'react'

export type taskProps = {
  id: number
  taskInfo: string
}

const App = () => {
  const [task, setTask] = useState('')
  const [compList, setCompList] = useState<taskProps[]>([
    { id: 1, taskInfo: 'eat mango' },
  ])
  const [pendList, setPendList] = useState<taskProps[]>([
    { id: 9, taskInfo: 'play cricket' },
  ])

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
      {compList.map((item) => (
        <p key={item.id}>{item.taskInfo}</p>
      ))}
      <h3>Completed List</h3>
      {pendList.map((item) => (
        <p key={item.id}>{item.taskInfo}</p>
      ))}
    </div>
  )
}

export default App
