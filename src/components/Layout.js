import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
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
