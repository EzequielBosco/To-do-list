const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectMongo = require('./db')

const app = express()

app.use(cors({ origin: 'https://do-keep.vercel.app', methods: ["POST", "GET", "PUT", "DELETE"], credentials: true }))
app.use(morgan('dev'))
app.use(express.json())

connectMongo()

module.exports = app