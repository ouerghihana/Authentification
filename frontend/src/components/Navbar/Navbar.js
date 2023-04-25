import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({auth, logout}) => {
  return (
    <div>
      <nav>
        <ul>
          
          <li><Link to="/">Home</Link></li>
          
         
          <li><Link to="/app/Private">Register</Link></li>
          <li><Link to="/login">Profil</Link></li>

          <pre>
  
          <li><button type="button" defaultValue="Login" className="login" onClick={() => {}} >Login</button></li>
  
 <li> <input type="button" defaultValue="Logout" className="logout" /></li>
  
  </pre>

          
        </ul>
       
      </nav>
    </div>
  )
}

export default Navbar
