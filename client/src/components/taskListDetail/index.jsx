import { useEffect, useState } from "react"
import { TaskCard } from "../taskCard"
import { Link, useParams } from "react-router-dom"
import './taskCardDetail.css'
import { Button } from "../common/button"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "../../layout/navbar"

const TaskListDetail = () => {
  const [task, setTask] = useState({})
  const { id } = useParams()

  // get task
  useEffect(() => {
    fetch(`http://localhost:3000/task/${id}`)
      .then(response => response.json())
      .then(data => setTask(data))
      .catch(error => console.error('Error al obtener la tarea', error))
  }, [id])

  const notifySuccess = (message) => toast.success(message)
  const notifyError = (message) => toast.error(message)

  // delete task
  const handleDelete = () => {
    fetch(`http://localhost:3000/task/${id}`, {
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
      setTimeout(() => {window.location.href = "/"}, 3000)
    })
    .catch(error => console.error('Error al eliminar la tarea', error))
  }

  return ( 
    <>
    <Navbar id={id} />
      <main className="main-detail">
        <TaskCard 
          id={id}
          className="task-card-detail"
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          createdAt={task.createdAt}
          textButton="Volver al inicio"
        />
        <div className="buttons-detail">
          <Link to="/"><Button children="Volver al inicio" className="btn"></Button></Link>
          <Button className="btn" children="Editar tarea"></Button>
          <Button className="btn" children="Eliminar tarea" onClick={handleDelete}></Button>
        </div>
      </main>
    </>
  )
}

export { TaskListDetail }