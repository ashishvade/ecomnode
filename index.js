const express=require('express')
require('./db/connection')()

const {userRouter}=require('./router/userR')
const {productRouter}=require('./router/productR')
const {orderRouter}=require('./router/orderR')
const {categoryRouter} = require('./router/category')
const handleError = require('./middlwares/errorHandler')

const morgan=require('morgan')

const app=express()
app.use(express.json())
app.use(morgan('dev'))



const APIRouter=express.Router()
APIRouter.get('',(req,res)=>{
    console.log("api is calling")
})
//api
app.use("/api",APIRouter)


//user Router api/user
APIRouter.use('/user',userRouter)
APIRouter.use('/products',productRouter)
APIRouter.use('/orders',orderRouter)
APIRouter.use('/categorys',categoryRouter)


app.listen(3040,()=>{
    console.log('server started')
})

app.use(handleError)
