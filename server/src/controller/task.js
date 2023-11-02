const { Router } = require('express')
const Task = require('../models/task.model')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const { title } = req.query

        let tasks

        if (title) {
            tasks = await Task.find({ title: { $regex: title, $options: 'i' } })
        } else {
            tasks = await Task.find()
        }
        
        if(!tasks) return res.status(404).json({ error: 'Error, no se encontraron tareas' })
        
        res.json(tasks)

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        
        if(!task) return res.status(404).json({ error: 'Error, no se encontró la tarea' })
        res.json(task)

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la tarea' })
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
        res.json(task + 'Tarea eliminada correctamente')

    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' })
    }
})

router.delete('/', async (req, res) => {
    try {
        const count = await Task.countDocuments({})

        if (count > 0) {
            await Task.deleteMany({})
            res.json({ message: 'Todas las tareas eliminadas correctamente' })
        } else {
            res.json({ message: 'No se encontraron tareas para eliminar' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar las tareas' })
    }
})

module.exports = router