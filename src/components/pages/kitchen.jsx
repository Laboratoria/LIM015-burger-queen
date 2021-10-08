import React from 'react';
import { Link } from 'react-router-dom';


function Cocinero(props) {
    return (
    
    <nav className="menu-nav">
      <Link className= "link" style={{textDecoration:'none'}} to='/mesero'>
        BREAKFAST
    </Link>
      <li className="title-nav" onClick={props.kitchen}>
        LUNCH
      </li>
      <li className="title-nav" onClick={props.waiter}>
        DRINKS
      </li>
  </nav>
  )};

export default Cocinero;