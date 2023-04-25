
const express= require('express')

const UserRoute= express.Router()
const {register,login}=require('../controllers/userControl')
const {IsAuth}= require('../middlewares/IsAuth')
const{registerValidation,loginValidation,validation}= require('../middlewares/RegisterValidation')

//http://localhost:3000/auth/register
UserRoute.post('/register',registerValidation,validation, register)


//http://localhost:3000/auth/login
UserRoute.post('/login',loginValidation,validation, login)

//http://localhost:3000/auth/moncompte

UserRoute.get('/moncompte',IsAuth,(req,res)=>{
    res.send(req.user)
    console.log(req.user)
})




module.exports=UserRoute