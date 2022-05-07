import React from 'react'
import PropTypes from 'prop-types'

export default function ForecastItemCategory({ name, value }) {
  return (
    <li className='forecast-item__category'>
      <h6 className='forecast-item__category-title'>{name}:</h6>
      <div className='forecast-item__category-value'>{value}</div>
    </li>
    
  )
}

ForecastItemCategory.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}