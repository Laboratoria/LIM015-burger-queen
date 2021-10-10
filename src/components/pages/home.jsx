import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../img/hamburguer.png';
import '../../styles/pages/home.css'

function Home() {
  return (
    <div className="Home">
        {/* <p>Burguer Queen</p> */}
        <img src={Logo} className='Home-logo' alt='Burguer Queen Logo'/>
        <br/>
        <button className="Home-btn">
          <Link to='/Cocinero'>
            Cocinero
          </Link>
        </button>
      <button className="Home-btn">
        <Link to='/Mesero'>
          Mesero
        </Link>
      </button>
    </div>
  );
}



export default Home;
