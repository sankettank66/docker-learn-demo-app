const notfound=(req,res)=>{
    res.status(404).json({Message:"404 Not Found"});
}
module.exports={
    notfound
}