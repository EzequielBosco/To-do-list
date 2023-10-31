import { Button } from "../../components/common/button"
import Logo from "./Logo"
import Search from "./Search"
import "./navbar.css"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Navbar() {
  const notifySuccess = (message) => toast.success(message)
  const notifyError = (message) => toast.error(message)

  const handleDelete = () => {
    fetch('http://localhost:3000/task', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "No se encontraron tareas para eliminar") {
        notifyError(data.message);
      } else {
        notifySuccess("Todas las tareas eliminadas correctamente.")
      }
    })
    .catch(error => console.error('Error al eliminar las tareas', error))
  }

  return (
    <>
      <nav>
        <Logo />
        <Search className="search" placeholder="Buscar..." />
        <Button className="btn" children="ELIMINAR TAREAS" onClick={handleDelete} />
      </nav>
      <hr />
    </>
  )
}

export default Navbar