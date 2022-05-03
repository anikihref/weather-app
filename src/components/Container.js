import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={`container ${className ? className : ''}`}>
        {children}
    </div>
  )
}
