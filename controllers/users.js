//========================
//      DEPENDENCIES
//========================
const bcrypt = require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

//=========================
//          POST
//=========================
userRouter.post('/', (req, res) => {
    //overwrite the user passwrod w/the hashed password, then pass that into the DB
   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    //  res.send(req.body)
    User.create(req.body, (error, createdUser) => {
        res.send(createdUser)
    })
})



//=========================
//          EXPORT
//=========================
module.exports = userRouter;