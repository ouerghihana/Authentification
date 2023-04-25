import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchAuthUser} from '../../Api/AuthApi'
import { setAuth } from '../../store/authSlice'



import Login from '../Login/Login'
import Users from '../Users/Users'
import Admin from '../Admin/Admin'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'



const Privateroute = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const authUser = useSelector(state=>state.auth)
console.log('authUser',authUser)
    //get user deja authentifié

const getAuth = async ()=>{
    const data = await  fetchAuthUser()        //appel de la fonction fetchAuthUser depuis le fichier Api
    console.log('data auth', data)
    dispatch(setAuth(data))        //mise à jour de l'état de l'authentification de l'utilisateur dans le store
  }



useEffect (()=>{
    getAuth()
},[])

//local storage pour savoir si user authentifie ou nn, token


const token= localStorage.getItem('token')

//fonction logout
const logout=()=>{
  localStorage.removeItem('token')
navigate('/login')
}

  return (                          //Lorsque l'utilisateur clique sur le bouton de déconnexion, la fonction logout est appelée, ce qui supprime le token du localStorage.
    <div> { token? (<div><Navbar auth={authUser} logout={logout} />  </div>):(<Login/>) }   </div>          //<h1>hellllo!</h1> <button onClick={()=>logout()} >logout</button>
  )
}

export default Privateroute