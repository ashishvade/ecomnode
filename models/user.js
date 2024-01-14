

const { boolean } = require('joi');
const mongoose = require('mongoose');

const Schema=mongoose.Schema

const userSchema = new Schema({
    name:{type:String , required:true },
    isAdmin :{type:Boolean ,default:false},
  email:{type:String, required:true , unique:true},
  phone:{type:Number},
  active:{type:Boolean,required:true,default:true},
  password:{type:String,required:true}

},{timestamps:{createdAt:'create_At' , updatedAt:'updated_At'}})

userSchema.statics.isExists=async function isExists(email){
const user= await this.findOne({email:email})
return (user)? true :false;
}
const User=mongoose.model('user',userSchema)  

module.exports={User} 