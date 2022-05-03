import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container.js';



const setActiveClass = ({ isActive }) =>
  isActive ? 'navbar__active-link navbar__link' : 'navbar__link';

export default function Navbar() {
  return (
    <div className="navbar">
      <Container className='navbar__container'>
        <nav className="navbar__navigation">
          <NavLink to="/" className={setActiveClass}>
            Cards
          </NavLink>
          <NavLink to="region" className={setActiveClass}>
            Forecast
          </NavLink>
          <NavLink to="/hz" className={setActiveClass}>
            Popular cities
          </NavLink>
        </nav>
      </Container>
    </div>
  );
}
