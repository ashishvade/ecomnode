const mongoose=require('mongoose')

const Schema=mongoose.Schema

const categorySchema=new Schema({
    name:{type:String, required:true}
},{timestamps:{
    createdAt:"crateAt",
    updatedAt:'updateAt',
}})

const Category = mongoose.model('category',categorySchema)

module.exports={Category}
