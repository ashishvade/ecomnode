const express=require('express')
const {getProduct }=require('../controller/productC')
const productRouter=express.Router()

productRouter
.get('/product', getProduct )
.post('/product')
.put('/product')
.delete('/product')


module.exports = { productRouter } 