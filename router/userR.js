const express=require('express')
const {getUsers}=require('../controller/userC')
const userRouter=express.Router()

userRouter
.get('/user',getUsers)
.put('/user',)
.post('/user',)
.delete('/user',)

module.exports =  { userRouter }