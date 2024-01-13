express=require('express')
const {getOrder}=require('../controller/orderC')
const orderRouter=express.Router()

orderRouter
.get('',getOrder)

.put('',)
.post('',)
.delete('',)

module.exports = { orderRouter } 