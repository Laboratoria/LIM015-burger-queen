import React from 'react';
import './MenuView.css'
import { MenuOptions } from './MenuOptions'
import lineImage from '../images/line.png';
import { OrdersView } from './OrdersView';


export function MenuView() {
  return (
    <section className='container'>
        <MenuOptions/>
        <div className='sectionImage'>
            <img src={lineImage} className='line' alt='lineImage' ></img>
        </div>

        <OrdersView/>
        
    </section>

  );
}

export default MenuView;