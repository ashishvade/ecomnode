const express=require('express')
const {getUsers,saveUser,loginUser,updateUser}=require('../controller/userC')
const userRouter=express.Router()

userRouter
.get('/',getUsers)
.put('/',updateUser)
.post('/',saveUser)
.post('/login',loginUser)
.delete('',)

module.exports =  { userRouter }