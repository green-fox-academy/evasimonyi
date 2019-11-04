import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {

  const linkStyle = {
    margin: '20px',
    padding: '10px',
    border: '3px solid purple',
    borderRadius: '1rem',
    textTransform: 'capitalize',
    fontFamily: 'Helvetica',
    fontSize: '16px',
    textDecoration: 'none',
    backgroundColor: 'azure',
  };

  return (
    <React.Fragment>
      <NavLink style={linkStyle} to='/'>Home</NavLink>
      <NavLink style={linkStyle} to='/about'>About</NavLink>
      <NavLink style={linkStyle} to='/contact'>Contact</NavLink>
    </React.Fragment>
  )
}
