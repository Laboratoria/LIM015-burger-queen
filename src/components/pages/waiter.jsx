import React from 'react';
import NavBar from '../nav-footer/nav'
import Footer from '../nav-footer/footer'
import '../../styles/pages/waiter.css'

function Cocinero(props) {
  return (

    <>
      {/* PARTE DE NAV */}
      <div>
        <NavBar />
      </div>

      {/* PARTE DE MENU POR SECCIONES
      creo que debe ir en otro jsx como en el nav */}
      <nav className='menu-orden'>
        <li className='orden-breakfasr' onClick={props.home}>
          BREAKFAST
        </li>
        <li className='orden-lunch' onClick={props.kitchen}>
          LUNCH
        </li>
        <li className='orden-drink' onClick={props.waiter}>
          DRINKS
        </li>
      </nav>

      {/* PARTE DONDE INGRESA EL NOMBRE DEL CLIENTE Y EL NUMERO DE MESA */}
      <section>
        <section className='dataClient'>
          <p>NOMBRE DEL CLIENTE:</p>
          <input type='text' className='text' />
        </section>
        <section className='dataClient'>
          <p>NUMERO DE MESA:</p>
          <input type='text' className='text' />
        </section>

        <div className='order'>
          *Aqui iran dinamicamente los pedidos*
        </div>
        <button>ENVIAR A LA COCINA</button>
        <button>CANCELAR PEDIDO</button>
      </section>

    {/* FOOTER DE LA PAGINA */}
      <div>
        <Footer />
      </div>

    </>
  )
};

export default Cocinero;

