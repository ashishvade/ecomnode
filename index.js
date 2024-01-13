const express=require('express')
const morgan=require('morgan')
const app=express()
app.use(express.json())
app.use(morgan('dev'))

app.listen(3030,()=>{
    console.log('server started')
})

app.get('/',(req,res)=>{
    res.send({message:'succes'})
})