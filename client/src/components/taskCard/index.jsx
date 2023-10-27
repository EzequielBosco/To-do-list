// import "./task.css"
// import { Link } from "react-router-dom"

const TaskCard = ({ title, description, completed, dueDate, createdAt }) => {
  return (
    <div class="card-task">
      <h3 className="card-title">{title}</h3>
      <hr />
      <p className="card-description">{description}</p>
      <hr />
      <span className="card-completed">Completada: {completed} </span>
      <hr />
      <small className="card-date">Vence en {dueDate} </small>
      <small className="card-date">Creada el {createdAt} </small>
    </div>
  )
}

export { TaskCard }