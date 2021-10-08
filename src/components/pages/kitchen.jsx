import React from 'react';
import '../../styles/pages/kitchen.css'

function Cocinero(props) {
  return (

    <>
      <nav className='menu-nav'>
        <li className='title-nav' onClick={props.home}>
          BREAKFAST
        </li>
        <li className='title-nav' onClick={props.kitchen}>
          LUNCH
        </li>
        <li className='title-nav' onClick={props.waiter}>
          DRINKS
        </li>
      </nav>
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
    </>
  )
};

export default Cocinero;