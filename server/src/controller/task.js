const { Router } = require('express')
const Task = require('../models/task.model')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find()
        if(!tasks) return res.status(404).json({ error: 'Error, no se encontraron tareas' })
        res.json(tasks)

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' })
    }
})

router.post('/', async (req, res) => {
    try {
        const { title, description, dueDate } = req.body
    
        const newTask = new Task({
            title,
            description,
            dueDate
        })
    
        const savedTask = await newTask.save()
        res.json(savedTask)

    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const taskId = req.params.id
        const { title, description, completed, dueDate } = req.body
        const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description, completed, dueDate }, { new: true })
        res.json(updatedTask)

    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({ error: 'Error, no se encontró la tarea' })
        res.json(task + 'Tarea actualizada correctamente')

    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const result = await Task.deleteMany({})
        if (result.deletedCount > 0) {
            res.json({ message: 'Todas las tareas eliminadas correctamente' })
        } else {
            res.json({ message: 'No se encontraron tareas para eliminar' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar las tareas' })
    }
})

module.exports = router