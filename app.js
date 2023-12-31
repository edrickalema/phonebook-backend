const express = require('express')
const morgan = require('morgan')
const phoneRouter = require('./routes/routes')
const cors = require('cors')

const {homePage} = require('./controller/controller')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/info', homePage)
app.use('/api/persons', phoneRouter)
app.use(morgan('tiny'))
app.use(express.static('dist'))


module.exports = app

