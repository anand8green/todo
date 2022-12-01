import { render, screen } from '@testing-library/react'
import TaskBar from './TaskBar'

test('TaskBar renders list item correctly', () => {
  let taskList = [{ id: 1, taskInfo: 'mango' }]
  let handleToggle = () => console.log('')

  render(
    <TaskBar title="pend" taskList={taskList} handleToggle={handleToggle} />
  )
  const task = screen.getByLabelText('task')
  expect(task).toBeInTheDocument()
  expect(task).toHaveTextContent('mango')
})
