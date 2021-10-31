import React, { useState, useEffect } from "react";
import './OrdersView.css';

export function OrdersView () {
    const [orders, setOrders] = useState([]);
    
    return (
        <div className='sectionOrder'>
                <br/>
                <input className="client"></input>
                <section className= 'orderProducts'> {/* Diseño de flex direction:row */}
                    <div className='list'> {  } </div>
                </section>
            </div>
    )
}

export default OrdersView;