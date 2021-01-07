const verifyToken = async(req,res,next) => 
{
    const token=req.headers['x-api-key']
    if(!token) return res.status(403).json({message: 'No esta autorizado'})
    next()

}
module.exports=verifyToken
