import React from 'react';


function Cocinero(props) {
    return (
    
    <nav className="menu-nav">
      <li className="title-nav" onClick={props.home}>
        BREAKFAST
      </li>
      <li className="title-nav" onClick={props.kitchen}>
        LUNCH
      </li>
      <li className="title-nav" onClick={props.waiter}>
        DRINKS
      </li>
  </nav>
  )};

export default Cocinero;