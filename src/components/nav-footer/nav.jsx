import React from 'react';
import { NavLink, Nav, NavMenu} from 'react-router-dom'

function NavBar ( ) {
    return (
    <Nav>
      <NavMenu>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/team' activeStyle>
          Teams
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          Sign Up
        </NavLink>
      </NavMenu>
    </Nav>
    )
} 

export default NavBar;