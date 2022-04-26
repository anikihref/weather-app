import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../page-parts/Header';
import Main from '../page-parts/Main';
import Navbar from './Navbar';


export default function Layout({ headerContent }) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <Main>
        
        <Outlet />
        
      </Main>
    </>
  );
}
