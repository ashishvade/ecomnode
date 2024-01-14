function handleError(error, req,res,next){
    if(res.statusCode== 200) res.status(500)
res.json({error:error.message,  
info :"message form handler",
})
}

module.exports=handleError
