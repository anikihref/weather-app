import React from 'react'
import Container from './Container.js'
import SearchInput from './SearchInput.js'

export default function Navbar({ classname }) {
  return (
    <div className={classname}>
        <Container classname={classname}>
            <SearchInput classname={classname} />
        </Container>
    </div>
  )
}
