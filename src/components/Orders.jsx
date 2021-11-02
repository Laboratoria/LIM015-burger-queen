import React from "react";
import './Orders.css';
import Products from "./Products";

export default function Orders ({order, setORder}) {
    // const [orders, setOrders] = useState([]);
    
    return (
        <section className= 'orderProducts'> {/* Diseño de flex direction:row */}
            <div className='list'> 
                <h6>ORDER</h6>

                {order.length === 0 ? (<p>0</p>):(order.map)}
            </div>
            <button>➕</button>
            <div className ="amount">{}</div>
            <button>➖</button>
        </section>
    )
}

// Me quede en armar la estructura de orders y 
// agregar en esta parte el input del nombre del cliente
