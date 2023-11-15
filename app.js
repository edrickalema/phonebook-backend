const express = require('express')
const morgan = require('morgan')
const phoneRouter = require('./routes/routes');

const {homePage} = require('./controller/controller')

const app = express()

app.use(express.json())

app.use('/info', homePage)
app.use('/api/persons', phoneRouter)
app.use(morgan('tiny'))




app.listen(5000, () => {
    console.log("App is running at port 5000")
})

