import { useEffect, useState } from "react"
import { TaskCard } from "../taskCard"
import { Link, useParams } from "react-router-dom"
import './taskCardDetail.css'
import { Button } from "../common/button"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "../../layout/navbar"
import FormUpdate from "../common/form/formUpdate"

const TaskListDetail = () => {
  const [task, setTask] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const { id } = useParams()

  // get task
  useEffect(() => {
    fetch(`https://do-keep-api.onrender.com/task/${id}`)
    // fetch(`http://localhost:3000/task/${id}`)
      .then(response => response.json())
      .then(data => setTask(data))
      .catch(error => console.error('Error al obtener la tarea', error))
  }, [id])

  const notifySuccess = (message) => toast.success(message)
  const notifyError = (message) => toast.error(message)

  // delete task
  const handleDelete = () => {
    fetch(`https://do-keep-api.onrender.com/task/${id}`, {
      // fetch(`http://localhost:3000/task/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "No se encontró la tarea a eliminar") {
        notifyError(data.message);
      } else {
        notifySuccess("Tarea eliminada correctamente")
      }
      setTimeout(() => {window.location.href = "/"}, 2500)
    })
    .catch(error => console.error('Error al eliminar la tarea', error))
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return ( 
    <>
    <Navbar id={id} />
      <main className="main-detail">
        {isEditing ? (
          <>
          {/* // envio task a detail */}
            <FormUpdate id={id} originalTask={task} />
            <div className="buttons-detail">
              <Button children="Cancelar" className="btn" onClick={handleCancel} />
            </div>
          </> 
          ) : (
            <>
              <TaskCard 
                id={id}
                className="task-card-detail"
                title={task.title}
                description={task.description}
                completed={task.completed}
                dueDate={task.dueDate}
                createdAt={task.createdAt}
                textButton="Volver al inicio"
              />
              <div className="buttons-detail">
                <Link to="/"><Button children="Volver al inicio" className="btn"></Button></Link>
                <Button className="btn" children="Editar tarea" onClick={handleEdit}></Button>
                <Button className="btn" children="Eliminar tarea" onClick={handleDelete}></Button>
              </div>
            </>
          )}
      </main>
    </>
  )
}

export { TaskListDetail }