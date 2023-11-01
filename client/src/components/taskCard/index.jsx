import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../../context"
import "./taskCard.css"
import { Link } from "react-router-dom"
import { Button } from "../common/button"

const TaskCard = ({ id, className, title, description, dueDate, createdAt, textButton }) => {
  const { taskData, updateTaskCompletion } = useContext(TaskContext)

  const [isCompleted, setIsCompleted] = useState(false)

  // get state completed (checkbox)
  useEffect(() => {
    fetch(`https://do-keep-api.onrender.com/task/${id}`)
    .then(response => response.json())
    .then(data => {
      setIsCompleted(data.completed)
    })
    .catch(error => console.error('Error al obtener el estado de la tarea', error))
  }, [])

  // change completed
  const toggleTaskCompletion = () => {
    const newIsCompleted = !isCompleted

    setIsCompleted(newIsCompleted)
    updateTaskCompletion(id, newIsCompleted)
    
    fetch(`https://do-keep-api.onrender.com/task/${id}`, {
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

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString()
  const formattedDueDate = new Date(dueDate).toLocaleDateString()

  return (
    <div className={className}>
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
      <hr />
      <div id="state">
        <span className="card-completed">{ isCompleted ? "Completada" : "Pendiente" } </span>
        <input type="checkbox" onChange={toggleTaskCompletion} checked={isCompleted}/>
      </div>
      <hr />
      {dueDate && <small className="card-date">Vence el {formattedDueDate} </small>}
      <small className="card-date">Fecha de creación {formattedCreatedAt} </small>
      <Link to={`/${id}`}><Button className="btn" type="submit">{textButton}</Button></Link>
    </div>
  )
}

export { TaskCard }