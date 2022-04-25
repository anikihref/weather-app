import React from 'react'
import { formatClassname } from '../App'

export default function Logo({ classname }) {
  return (
    <a className={formatClassname('logo', classname)} href='/'>
      <img src='/img/logo.png' alt='logo' />
    </a>
  )
}
