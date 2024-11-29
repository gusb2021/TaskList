const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const taskRouters = require('./routes/tasks.routes')

const app = express()

app.use(cors)   // Permite comunicar los servidores de back y front de manera simple
app.use(morgan('dev'))
app.use(express.json())

app.use(taskRouters)

app.use((err, req, res, next) =>{

    return res.json({error: err.message})
})

app.listen(3000)

console.log("Server on port 3000")