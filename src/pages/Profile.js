import React from 'react'
import {useParams} from 'react-router-dom'

/*
useParams = Te permite obtener datos de la query de la url
*/
export default function Profile() {
  const {username} = useParams()

  return (
    <div>
      Profile : {username}
    </div>
  )
}
