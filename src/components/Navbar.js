import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container.js';



const setActiveClass = ({ isActive }) =>
  isActive ? 'navbar__active-link navbar__link' : 'navbar__link';

export default function Navbar({ children }) {
  return (
    <div className="navbar">
      <Container classname="navbar">
        <nav className="navbar__navigation">
          <NavLink to="/" className={setActiveClass}>
            Cards
          </NavLink>
          <NavLink to="region" className={setActiveClass}>
            Region
          </NavLink>
          <NavLink to="/hz" className={setActiveClass}>
            HZ
          </NavLink>
        </nav>
      </Container>
    </div>
  );
}
