const home = require('../controller/home')

const router = app => {
    app.use('/home', home)
}

module.exports = router