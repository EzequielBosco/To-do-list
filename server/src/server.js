const app = require('./app')
const router = require('./routes')
require('dotenv').config()

const PORT = process.env.PORT || 3000

router(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})