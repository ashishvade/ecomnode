const mongoose=require('mongoose')
const DB_URL='mongodb://0.0.0.0:27017/ecom'

async function createConnection(){
    console.log("creating connection")
 const connection=await mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(result=>{
console.log("connected")
}

).catch(err=>{
console.log(err)
}

)



}

module.exports=createConnection

