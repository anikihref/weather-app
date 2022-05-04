import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function LocationItem({ location }) {
  return (
    <Link className="locations__link" to={`/forecast/${location.name}`}>
      <div className='locations__link-text' >{location.name}</div>
      {location.isUserRegion && <p className='locations__modifier'>*your location</p>}
    </Link>
  )
}

LocationItem.propTypes = {
  location: PropTypes.exact({
    name: PropTypes.string,
    id: PropTypes.string,
    isUserRegion: PropTypes.bool,
  })
}