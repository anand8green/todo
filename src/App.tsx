import { useState } from 'react'
import FormData from './components/FormData'
import Header from './components/Header'
import TaskBar from './components/TaskBar'

export type taskProps = {
  id: number
  taskInfo: string
}

const App = () => {
  const [task, setTask] = useState('')
  const [compList, setCompList] = useState<taskProps[]>([])
  const [pendList, setPendList] = useState<taskProps[]>([])

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (task.length > 2) {
      let newTask = {
        id: Date.now(),
        taskInfo: task,
      }
      setPendList((pendList) => [...pendList, newTask])
      setTask('')
    }
  }
  const handleToggle = (task: taskProps) => {
    if (pendList.includes(task)) {
      setPendList([...pendList.filter((allTask) => allTask.id !== task.id)])
      setCompList([...compList, task])
    } else {
      setPendList([...pendList, task])
      setCompList([...compList.filter((allTask) => allTask.id !== task.id)])
    }
  }

  return (
    <div>
      <Header title={'Todo list'} />
      <FormData handleTask={handleTask} task={task} setTask={setTask} />
      <TaskBar
        title="Pending List"
        taskList={pendList}
        handleToggle={handleToggle}
      />
      <TaskBar
        title="Completed List"
        taskList={compList}
        handleToggle={handleToggle}
      />
    </div>
  )
}

export default App
