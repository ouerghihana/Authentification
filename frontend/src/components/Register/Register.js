import React ,{useState}from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import {postauthUser}from '../../Api/AuthApi'
const Register = () => {




const [UserName,setUserName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


    //Partie navigation :component login
const navigate = useNavigate()
const login = async(value)=> {
  try{
  await postauthUser (value)
    navigate ('/login')
  } catch (error) {
    console.log(error)
  }
}





    return (
    <div className='body_register'>
    <div id="login-box">
  <div className="left">
    <h1>REGISTER</h1>
    <input type="text" name="username" placeholder="Username" value ={UserName}  onChange={(e)=>setUserName(e.target.value)} />
    <input type="text" name="email" placeholder="E-mail"  value ={email}  onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" name="password" placeholder="Password"  value ={password}  onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit" name="signup_submit" defaultValue="Sign me up"  onClick={()=>login ({UserName,email,password})}> Login  </button>
  </div>
  <div className="right">
    <span className="loginwith">
      Sign in with
      <br />
      social network
    </span>
    <button className="social-signin facebook" onClick={() => window.location.href = 'https://www.facebook.com'}>Log in with Facebook</button>
<button className="social-signin google" onClick={() => window.location.href = 'https://mail.google.com/'}>Log in with Google+</button>

  </div>
  <div className="or">OR</div>
</div>

    </div>
  
  )
}

export default Register