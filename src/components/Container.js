import React from 'react'
import PropTypes from 'prop-types'


export default function Container({ children, className }) {
  return (
    <div className={`container ${className ? className : ''}`}>
        {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string
}