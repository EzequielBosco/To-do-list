import React, { useState, useEffect } from 'react'
import { TaskCard } from '../taskCard'
import "./taskList.css"

function TaskList() {
  const [tasks, setTasks] = useState([])

  // get tasks
  useEffect(() => {
    fetch('http://localhost:3000/task')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error al obtener las tareas', error))
  }, [])

  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskCard 
          className="task-card"
          key={task._id} 
          id={task._id}
          title={task.title}
          completed={task.completed}
          createdAt={task.createdAt} 
          textButton="Ver más"
        />
      ))}
    </div>
  )
}

export default TaskList