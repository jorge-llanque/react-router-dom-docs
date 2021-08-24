import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

/*
Redirect = Redirecciona la url a otro url, usar en validaciones, se puede usar para enviar la url de la pagina anterior
*/

export default function PrivateRoutes({component: Component, ...rest}) {
  const location = useLocation()
  const auth = useAuth()

  return (
    <Route {...rest}>
      {
        auth.isLogged() ? <Component /> : <Redirect to={{pathname: '/login', state: {from: location}}}  />
      }
      
    </Route>
  )
}
