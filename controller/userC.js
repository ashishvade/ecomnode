const { Error } = require("mongoose");
const { User } = require("../models/user");
const joi=require('joi')
function getUsers(req,res,next){
    res.json({message:"get user cantrolles"})
   
}



 async function saveUser(req,res,next){
    const schema=joi.object({
        name:joi.string().min(4).max(40).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).max(30).required(),
        repassword:joi.string().min(6).max(30).required(),
        phone:joi.string().min(10).max(12)

    })
    const result=schema.validate(req.body);

    if(result.error){
res.status(400)
return next(new Error(result.error.details[0].message))

    }

    const userData=result.value;

    if(userData.password!=userData.repassword){
        res.status(400)
        return next(new Error("password not matched"))
  
    }

    //check user is unique
 let userk=await User.findOne({email:userData.email})

 if(!userk){
    const user= await new User(userData).save()
    res.json(user)
 }else{
    // res.status(400)
    return next(new Error("user already register"))

  
 }
 

  
 }   

    module.exports = { getUsers, saveUser}