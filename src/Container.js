import React from 'react'
import { formatClassname } from './App.js'

export default function Container({ children, classname }) {
  return (
    <div className={formatClassname('container', classname)}>
        {children}
    </div>
  )
}
