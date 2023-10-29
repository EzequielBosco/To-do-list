import { useContext, useState } from "react"
import { TaskContext } from "../../context"
import "./taskCard.css"

const TaskCard = ({ id, title, description, dueDate, createdAt }) => {
  const { taskData, updateTaskCompletion } = useContext(TaskContext)

  const [isCompleted, setIsCompleted] = useState(taskData.find(task => task._id === id)?.completed || false)

  const toggleTaskCompletion = () => {
    const newIsCompleted = !isCompleted

    setIsCompleted(newIsCompleted)
    updateTaskCompletion(id, newIsCompleted)
    
    fetch(`http://localhost:3000/task/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed: newIsCompleted }),
    })
    .then(response => response.json())
    .then(updatedTask => updateTaskCompletion(id, updatedTask.completed))
    .catch(error => console.error('Error al actualizar el estado de la tarea', error))
  }

  return (
    <div className="task-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <hr />
      <span className="card-completed">Estado: { isCompleted ? "Completada" : "Pendiente" } </span>
      <input type="checkbox" onChange={toggleTaskCompletion} checked={isCompleted}/>
      <hr />
      <small className="card-date">Vence en {dueDate} </small>
      <small className="card-date">Creada el {createdAt} </small>
    </div>
  )
}

export { TaskCard }