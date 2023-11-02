import React, { useState, useEffect } from 'react'
import { TaskCard } from '../taskCard'
import "./taskList.css"

// recibo search para mostrar resultados o todas las tareas
function TaskList({ searchResults, onTaskClick }) {
  const [tasks, setTasks] = useState([])

  // get tasks
  useEffect(() => {
    if (searchResults.length > 0) {
      setTasks(searchResults)
    } else {
      // fetch('http://localhost:3000/task')
      fetch('https://do-keep-api.onrender.com/task')
        .then((response) => response.json())
        .then((data) => setTasks(data))
        .catch((error) => console.error('Error al obtener las tareas', error))
      }
  }, [searchResults])

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
          onClick={() => { onTaskClick(task) }}
        />
      ))}
    </div>
  )
}

export default TaskList