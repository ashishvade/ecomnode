const express=require('express')
const {getUsers,saveUser}=require('../controller/userC')
const userRouter=express.Router()

userRouter
.get('',getUsers)
.put('',)
.post('',saveUser)
.delete('/user',)

module.exports =  { userRouter }