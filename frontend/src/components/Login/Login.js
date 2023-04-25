import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {

const navigate= useNavigate()

//formulaire : partie login
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error, setError] = useState('');


  // Fonction appelée lorsque l'utilisateur soumet le formulaire de connexion

const handleLogin= async (values) => {

  try {

    // Envoi d'une requête POST à l'URL d'authentification avec les valeurs entrées par l'utilisateur

    const res = await axios.post ('http://localhost:3000/auth/login', values)  
     console.log('res',res.data.token)

  // Stockage du token dans le stockage local (local storage)

     await localStorage.setItem('token', res.data.token)
     // Redirection vers la page d'accueil
     navigate('/app/PrivateRoute');
  }catch (err){
    console.log(err)
    setError('Invalid email or password'); // Stockage du message d'erreur dans le hook d'état

  }
}



return (
    
     <div className='body_login'>
     <form className="login-form">
       <p className="login-text">
         <span className="fa-stack fa-lg">
           <i className="fa fa-circle fa-stack-2x" />
           <i className="fa fa-lock fa-stack-1x" />
         </span>
       </p>
       <input
         type="email"
         className="login-username"
        
         placeholder="Email"   value ={email}  onChange={(e)=>setEmail(e.target.value)}
       />
       <input
         type="password"
         className="login-password"
        
         placeholder="Password"   value ={password}  onChange={(e)=>setPassword(e.target.value)}
       />
       <button
         type="button"   className="login-submit" onClick={()=>handleLogin({email,password})}>
        Login </button>
                {error && <p className="error-message">{error}</p>} {/* Affichage du message d'erreur s'il existe */}

     </form>
     <a href="aa" className="login-forgot-pass">
       forgot password?
     </a>
     <div className="underlay-photo" />
     <div className="underlay-black" />
  
   </div>

  )
}

export default Login