const express=require('express')
const {getCategorys}=require('../controller/categoryC')
const categoryRouter=express.Router()
// const { getCategorys } = require('../controller/categoryC')


categoryRouter.get('', getCategorys)


module.exports = { categoryRouter }