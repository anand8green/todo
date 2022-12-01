import { taskProps } from '../App'

type PendingTasksProps = {
  title: string
  taskList: taskProps[]
  handleToggle: (task: taskProps) => void
}

const TaskBar = ({ title, taskList, handleToggle }: PendingTasksProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {taskList.map((task) => (
        <p key={task.id} onClick={() => handleToggle(task)}>
          {task.taskInfo}
        </p>
      ))}
    </div>
  )
}

export default TaskBar
