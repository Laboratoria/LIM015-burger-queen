import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/nav-footer/nav.css'

function NavBar ( ) {
  // falta agregar como referenciar los links
    return (
      <nav className='navBar'>
        <Link className= "title-nav" style={{textDecoration:'none'}} to='/Home'>
          HOME
        </Link>
        <Link className= "title-nav" style={{textDecoration:'none'}} to='/'>
          PEDIDOS REALIZADOS
        </Link>
        <Link className= "title-nav" style={{textDecoration:'none'}} to='/Mesero'>
          PEDIDOS ENTREGADOS
        </Link>
      </nav>
    )
}

export default NavBar;