const api = require('../controller/api')

const router = app => {
    app.use('/api', api)
}

module.exports = router