const mongoose = require('mongoose')

const taskCollection = 'task'

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    completed: {
        type: Boolean,
        default: false,
    },
    dueDate: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Tasks = mongoose.model(taskCollection, taskSchema)

module.exports = Tasks
