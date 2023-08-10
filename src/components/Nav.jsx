import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/student'>Students</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
