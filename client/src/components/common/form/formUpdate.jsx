import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import 'react-toastify/dist/ReactToastify.css'
import "./form.css"
import { useEffect } from 'react'

// recibo task de detail para mostrar valores
function FormUpdate({ id, originalTask }) {
  const notifySuccess = () => toast.success('Tarea modificada')
  const notifyError = () => toast.error('Error al modificar la tarea')
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (originalTask) {
      setValue("title", originalTask.title)
      setValue("description", originalTask.description)
      const formattedDueDate = new Date(originalTask.dueDate).toISOString().split('T')[0]
      setValue("dueDate", formattedDueDate)
    }
  }, [originalTask])

  // update task
  const handleUpdate = (data) => {
    // fetch(`http://localhost:3000/task/${id}`, {
    fetch(`https://do-keep-api.onrender.com/task/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        notifySuccess()
      } else {
        notifyError()
      }
      setTimeout(() => {window.location.href = '/'}, 2000)
    })
    .catch(error => console.error('Error al modificar la tarea', error))
  }

  return (
    <form className="form-update" onSubmit={handleSubmit(values => { handleUpdate(values) })}>
      <input className="input-form textos" type="text" {...register('title', {required: true, maxLength: 50 })} placeholder="Título..."></input>
      <input className="input-form textos" type="text" {...register('description', { maxLength: 250 })} placeholder="Descripción..."></input>    
      <hr />
      <div className='form-div'>
        <input className="input-form" type="date" {...register('dueDate', {required: true})}></input>
        <Button type="submit" className="btn" children="Actualizar" />
      </div>
    </form>
  )
}

export default FormUpdate