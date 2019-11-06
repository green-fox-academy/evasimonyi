import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from './header';

export default function Navbar(props) {

  const navStyle = {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ecdad7',
    fontFamily: 'Helvetica',
  };

  const linkStyle = {
    margin: '20px',
    padding: '10px',
    border: '2px solid #c5a6a0',
    borderRadius: '1rem',
    textTransform: 'capitalize',
    fontFamily: 'Helvetica',
    fontSize: '20px',
    textDecoration: 'none',
    color: '#9f877f',
  };

  return (
    <nav style={navStyle}>
      <Header title="THIS IS MY VERY ORIGINAL BLOGSITE" />
      <NavLink style={linkStyle} to='/'>Home</NavLink>
      <NavLink style={linkStyle} to='/about'>About</NavLink>
      <NavLink style={linkStyle} to='/contact'>Contact</NavLink>
    </nav>
  )
}
