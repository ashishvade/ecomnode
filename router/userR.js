const express=require('express')
const {getUsers,saveUser,loginUser}=require('../controller/userC')
const userRouter=express.Router()

userRouter
.get('/',getUsers)
.put('',)
.post('/',saveUser)
.post('/login',loginUser)
.delete('',)

module.exports =  { userRouter }