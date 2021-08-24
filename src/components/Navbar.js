import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import './Navbar.css'

export default function Navbar() {
  const auth = useAuth()
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="Active" >Home</NavLink></li>
        <li><NavLink to="/contact" activeClassName="Active" >Contact</NavLink></li>
        <li><NavLink to="/categories" activeClassName="Active" >Categories</NavLink></li>
        {!auth.isLogged() && 
          <>
            <li><NavLink to="/login" activeClassName="Active">Login</NavLink></li>
            <li><NavLink to="/register" activeClassName="Active">Register</NavLink></li>
          </>
        }
        
        {auth.isLogged() && 
          <>
            <li><NavLink to="/dashboard" activeClassName="Active">Dashboard</NavLink></li>
            <li><NavLink to="/payments" activeClassName="Active">Payments</NavLink></li>
          </>
        }
        {auth.isLogged() && <li><button onClick={auth.logout} >Logout</button></li>}
        
      </ul>
    </nav>
  )
}
