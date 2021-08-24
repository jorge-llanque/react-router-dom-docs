import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

/* 
useHistory = Permite navegar a otra url enviando parámetros, como skip, limit .etc
useLocation = Te devuelve un objeto con toda la información de la url

*/

export default function Categories() {
  const location = useLocation()
  const history = useHistory()

  const query = new URLSearchParams(location.search)

  const skip = parseInt(query.get("skip")) || 0
  const limit = parseInt(query.get("limit")) || 15
  
  const handleNextPage = () => {
    query.set("skip", skip + limit)
    history.push({search: query.toString()})
  }

  return (
    <div>
      Categories
      <h2>Skip {skip}</h2>
      <h2>Limit {limit}</h2>
      <button onClick={handleNextPage} >Next</button>
    </div>
  )
}
