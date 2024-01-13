

const mongoose = require('mongoose');

const Schema=mongoose.Schema

const userSchema = new Schema({
    name:{type:String , required:true},
  email:{type:String, required:true , unique:true},
  phone:{type:Number,required:true},
  active:{type:Boolean,required:true,default:false},
  password:{type:String,required:true}

},{timestamps:{createdAt:'create_At' , updatedAt:'updated_At'}})


const User=mongoose.model('user',userSchema)  

export{User} 