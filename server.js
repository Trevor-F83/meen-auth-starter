//==============================
//        DEPENDENCIES
//==============================
const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()

//==============================
//          DB CONFIG
//==============================
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

//==============================
// DB CONNECTION ERR/SCC
//==============================
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

//========================
//      MIDDLEWARE
//========================
//body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }))

//=========================
//   Routes/Controllers
//=========================
const userController = require('./controllers/users')
app.use('/users', userController)

//==============================
//          LISTENER
//==============================

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))