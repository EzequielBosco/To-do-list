import "./taskCard.css"
// import { Link } from "react-router-dom"

const TaskCard = ({ title, description, completed, dueDate, createdAt }) => {
  return (
    <div className="task-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <hr />
      <span className="card-completed">Estado: {completed} </span>
      <hr />
      <small className="card-date">Vence en {dueDate} </small>
      <small className="card-date">Creada el {createdAt} </small>
    </div>
  )
}

export { TaskCard }