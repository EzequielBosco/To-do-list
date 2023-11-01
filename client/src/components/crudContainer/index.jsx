import { Button } from "../common/button"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./crudContainer.css"
import FormTask from "../common/form"

const CrudContainer = () => {
  const notifySuccess = (message) => toast.success(message)
  const notifyError = (message) => toast.error(message)

  // delete all tasks
  const handleDelete = () => {
    fetch('https://do-keep-api.onrender.com/task', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "No se encontraron tareas para eliminar") {
        notifyError(data.message)
      } else {
        notifySuccess("Todas las tareas eliminadas correctamente.")
      }
    })
    .catch(error => console.error('Error al eliminar las tareas', error))
  }

  return (
    <div className="crud-container">
      <FormTask />
      <Button className="btn" children="ELIMINAR TAREAS" onClick={handleDelete} />
    </div>
  )
}

export default CrudContainer