const res = require('express/lib/response')
const UserModel = require('../models/users.models');
const ValidateRegister = require('../validation/Register');
const ValidateLogin = require('../validation/Login');
const jwt= require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const Register =async(req,res)=>{
const{errors, isValid} = ValidateRegister(req.body)
    try{
        if(!isValid){
            res.status(404).json(errors);
        }else {
            UserModel.findOne({matricule: req.body.matricule}).then(async(exist) => {
                if(exist){
                    errors.matricule ="user exist";
                    res.status(404).json(errors);
                }else{ 
                    const hash = bcrypt.hashSync(req.body.password, 10)//hashed password
                    req.body.password = hash;
               // req.body.role="superviseur";
                await UserModel.create(req.body)
                res.status(200).json({message: "success"});
            }});
                    
                }
            

        }
           
       
catch (error){
    res.status(404).json(error.message)
}}
const Login =async(req,res)=>{
    const{errors, isValid} = ValidateLogin(req.body)

   
        try{
            if(!isValid){
                res.status(404).json(errors)
            }else {
     UserModel.findOne({matricule: req.body.matricule})
     .then(user=>{
         if(!user){
             errors.matricule = "not found user"
             res.status(404).json({message: errors})
         }else{
             bcrypt.compare(req.body.password, user.password)
              .then(isMatch=>{
                  if(!isMatch){
                    errors.password ="incorrect password"
                    res.status(404).json(errors)
                  }else{
                    var token = jwt.sign({
                         id: user._id,
                         matricule: user.matricule,
                         role: user.role
                         },
                          process.env.PRIVATE_kEY, { expiresIn: '1h'});//token:bita9et ta3rif
                          res.status(200).json({
                              message: "success",
                              token: "bearer "+token

                          })
                   
                  }
              })
            }
     }
        )}
    }catch(error){
        res.status(404).json(error.message);
    }
};
const Superviseur =async(req,res)=>{
   //on a besoin du jwt pour l'autorisation .
     res.send("Bienvenue superviseur")
}
const Agent =(req, res)=>{
    res.send("Bienvenue Agent")
}


          


module.exports ={
    Register,
    Login,
    Superviseur ,
    Agent 
}