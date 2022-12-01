import React from 'react'

type FormDataProps = {
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
  handleTask: (e: React.FormEvent) => void
}

const FormData = ({ handleTask, task, setTask }: FormDataProps) => {
  return (
    <div>
      <form onSubmit={handleTask}>
        <input
          placeholder="enter a task..."
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default FormData
