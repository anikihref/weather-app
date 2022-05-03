import React from 'react'
import { Link } from 'react-router-dom'


export default function LocationItem({ location }) {
  return (
    <Link className="locations__link" to={`/forecast/${location.name}`}>
      <div className='locations__link-text' >{location.name}</div>
    </Link>
  )
}
