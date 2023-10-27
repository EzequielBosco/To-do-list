const api = require('../controller/api')
const task = require('../controller/task')

const router = app => {
    app.use('/api', api)
    app.use('/task', task)
}

module.exports = router