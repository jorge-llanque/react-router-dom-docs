import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

export default function Login() {
  const history = useHistory()
  const location = useLocation()
  const previusObjectURL = location.state?.from
  const auth = useAuth()

  const handleLogin = () => {
    auth.login()
    history.push( previusObjectURL || '/dashboard')
  }
  
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} >
        Sign In
      </button>
    </div>
  )
}
