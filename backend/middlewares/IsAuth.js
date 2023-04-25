const jwt =require('jsonwebtoken')

const UserSchema= require('../model/user')



exports.IsAuth= async(req,res,next)=>{
    // Définit la fonction middleware IsAuth
    try {
        const token=req.header('Authorization')
    var decoded =jwt.verify(token,process.env.privateKey)   // Verify the validity of the JWT token using the private key stored in .env
    if(!decoded){return res.json({errors})}              // Si le token JWT n'est pas valide, retourne une erreur
    const user =await  UserSchema.findById(decoded.id)      // Search for the user corresponding to the ID of the JWT token in the database

res.user = user
next()
next()

    }catch (err){
        console.log(err)
    }
}