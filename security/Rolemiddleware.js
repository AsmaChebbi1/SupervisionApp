const Roles = {
    "superviseur":"superviseur",
    "agent":"agent",
  
}
const inRole = (...roles)=>(req, res, next)=>{
    const role = roles.find(role=> req.user.role===role)
    if(!role){
        return res.status(401).json({message:"accès interdit"})
    }
    next()
}
 module.exports = {
     inRole,
     Roles
 }