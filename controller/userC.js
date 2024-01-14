const { Error } = require("mongoose");
const { User } = require("../models/user");
const joi=require('joi')

const jwt=require('jsonwebtoken')

const passwordHash=require('password-hash')

function getUsers(req,res,next){
    res.json({message:"get user cantrolles"})
   
}

function validateUserForRegistation(user){
    const schema=joi.object({
        name:joi.string().min(4).max(40).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).max(30).required(),
        repassword:joi.string().min(6).max(30).required(),
        phone:joi.string().min(10).max(12)

        

    })
    const result=schema.validate(user);
    return result;
}

function validateLoginCreadentials(body){
    const schema=joi.object({
        
        email:joi.string().email().required(),
        password:joi.string().min(6).max(30).required(),
       

        

    })
    const result=schema.validate(body);
    return result;
}


 async function saveUser(req,res,next){
    
   const result=validateUserForRegistation(req.body)

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
 let isExists=await User.isExists(userData.email)

console.log(isExists)
 if(!isExists){
    userData.password=passwordHash.generate(userData.password)
     isExists= await new User(userData).save()
    res.json(isExists)
 }else{
    // res.status(400)
    return next(new Error("user already register"))

  
 }
 

  
 }   

 async  function loginUser(req,res,next){
    console.log(req.body)
    const result =validateLoginCreadentials(req.body)
if(result.error){
    res.status(400)
    const err=new Error(result.error.details[0].message)
   return next(err)
}
const {email,password}=result.value

const user= await User.findOne({email})

if(user){
    //password chek
  const isPasswordMatched  =passwordHash.verify(password,user.password)
   if(isPasswordMatched){
//login success
const payload={
    _id:user._id,
    isAdmin:user.isAdmin,
    email: user.email
}
const token=jwt.sign(payload,"1234")
return res.json({success:'login suucess',token})
   }
}
    res.status(400)
    const err=new Error("email or password invalid")
   return next(err)



 }


    module.exports = { getUsers, saveUser,loginUser}