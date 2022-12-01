import { taskProps } from '../App'

type PendingTasksProps = {
  title: string
  taskList: taskProps[]
  handleToggle: (task: taskProps) => void
}

const TaskBar = ({ title, taskList, handleToggle }: PendingTasksProps) => {
  return (
    <div>
      <h3 className={'taskTitle'}>{title}</h3>
      {taskList.map((task) => (
        <p
          className={` task ${
            title === 'Pending List' ? 'pendingTask' : 'completedTask'
          }`}
          key={task.id}
          onClick={() => handleToggle(task)}
          aria-label="task"
        >
          {task.taskInfo}
        </p>
      ))}
    </div>
  )
}

export default TaskBar
