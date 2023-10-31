import { useContext, useState } from "react"
import { TaskContext } from "../../context"
import "./taskCard.css"
import { Link } from "react-router-dom"
import { Button } from "../common/button"

const TaskCard = ({ id, className, title, description, dueDate, createdAt, textButton }) => {
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
    <div className={className}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <hr />
      <div id="state">
        <span className="card-completed">Estado: { isCompleted ? "Completada" : "Pendiente" } </span>
        <input type="checkbox" onChange={toggleTaskCompletion} checked={isCompleted}/>
      </div>
      <hr />
      <small className="card-date">Vence en {dueDate} </small>
      <small className="card-date">Creada el {createdAt} </small>
      <Link to={`/${id}`}><Button className="btn" type="submit">{textButton}</Button></Link>
    </div>
  )
}

export { TaskCard }