import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Button } from '../button'
import 'react-toastify/dist/ReactToastify.css'
import "./form.css"

function FormTask() {
  const notifySuccess = () => toast.success('Tarea creada')
  const notifyError = () => toast.error('Error al crear la tarea')
  const { register, handleSubmit } = useForm()

  // create task
  const handleCreate = (data) => {
    fetch('https://do-keep-api.onrender.com/task', {
      method: 'POST',
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
    })
    .catch(error => console.error('Error al crear la tarea', error))
  }

  return (
    <form className="form-task" onSubmit={handleSubmit(values => {
      console.log("submit", values)
      handleCreate(values)
    })}>
      <input className="input-form" type="text" {...register('title', {required: true})} placeholder="Title..."></input>
      <input className="input-form" type="text" {...register('description')} placeholder="Desciption..."></input>
      <hr />
      <div className='form-div'>
        <input className="input-form" type="date" {...register('dueDate', {required: true})}></input>
        <Button type="submit" className="btn" children="Crear" />
      </div>
    </form>
  )
}

export default FormTask