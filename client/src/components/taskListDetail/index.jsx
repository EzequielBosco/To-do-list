import { useEffect, useState } from "react"
import { TaskCard } from "../taskCard"
import { useParams } from "react-router-dom"
import './taskCardDetail.css'

const TaskListDetail = () => {
  const [task, setTask] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/task/${id}`)
      .then(response => response.json())
      .then(data => setTask(data))
      .catch(error => console.error('Error al obtener la tarea', error))
  }, [id])

  return ( 
    <main id="main-detail">
      <div>
        <TaskCard 
          id=""
          className="task-card-detail"
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          createdAt={task.createdAt}
          textButton="Volver al inicio"
        />
      </div>
    </main>
  )
}

export { TaskListDetail }