
import React from 'react'
import Task from './Task'

const Tasks = ({tasks, handleTaskClick}) => {

  return (
    <div>
        {tasks.map((task) => (
            <Task task={task} handleTaskClick={handleTaskClick}/>
        ))}
    </div>
  )
}

export default Tasks