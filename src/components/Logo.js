import React from 'react'
import { formatClassname } from '../App'
import PropTypes from 'prop-types';
export default function Logo({ classname }) {
  return (
    <a className={formatClassname('logo', classname)} href='/'>
      <img src='/img/logo.png' alt='logo' />
    </a>
  )
}


Logo.propTypes = {
  className: PropTypes.string
}