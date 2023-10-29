const task = require('../controller/task')

const router = app => {
    app.use('/task', task)
}

module.exports = router