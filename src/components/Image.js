import React from 'react'

export default function Image({ className, src, alt }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  )
}
