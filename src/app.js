const { application } = require('express')
const express = require('express')

const app = express()

const usersRouter = require('./users/users.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World, server OK!' })
})

app.use('/api', usersRouter)

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})
