const UserSchema = require('../model/user')

const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

exports.register=async(req,res)=>{
    try{
  // Récupération des données
const {UserName, email,password}= req.body
const found =await  UserSchema.findOne ({email})

if (found){return res.json({msg:'A user with this email already exists.'})}

const newUser =await new  UserSchema(req.body)

//// Utilisation de bcrypt pour hasher le mot de passe
const saltRounds = 10 
const salt = bcrypt.genSaltSync(saltRounds)
const hash = bcrypt.hashSync(password,salt)

newUser.password = hash

newUser.save()
res.status(200).json ({msg:` The user ${UserName} has been registered successfully.`,newUser})
    }catch (err) {
        console.log(err)
    }
}


exports.login=async(req,res)=>{
    try{
        const {password,email}= req.body
        const found = await UserSchema.findOne({email})
        if(!found){return res.json({msg:'User with this email address is not registered. Please try again or create a new account.'})}
        const match= bcrypt.compare(password, found.password)
        if (!match) {return res.json ({msg:'Incorrect email or password. Please try again.'})}
//// Génération d'un token avec JWT
        const payload={id: found._id}
        var token =jwt.sign(payload, process.env.privateKey)
res.json({msg:'Login successful.',found, token})
    }catch (err) {
        console.log(err)
    }
}