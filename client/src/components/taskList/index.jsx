import React, { useState, useEffect } from 'react'
import { TaskCard } from '../taskCard'

function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/task')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error al obtener las tareas', error))
  }, [])

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard 
          key={task._id} 
          title={task.title}
          description={task.description}
          completed={task.completed}
          dueDate={task.dueDate}
          createdAt={task.createdAt} 
        />
      ))}
    </div>
  )
}

export default TaskList