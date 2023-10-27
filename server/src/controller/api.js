const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    console.log('Solicitud recibida en /api')
    const data = { users: ["user1", "user2", "user3"] }
    res.json(data)
})

module.exports = router