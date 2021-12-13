import React, {useRef} from "react";
import { Button } from "react-bootstrap";
import './Orders.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Order({ order, setOrder }) {
    // **.reduce -> recibe'4' argumentos: acumulador(acc) 
    const total = order.reduce((acc, item) => acc + item.price , 0)
    const inputName = useRef();

    const addOrdersFirebase =async(e)=>{
        e.preventDefault()
        let orderProduct = {};
        orderProduct.nameCustomer= inputName.current.value;
        orderProduct.products = order;
        orderProduct.created_at = new Date();
        orderProduct.status = "pending";
        console.log(orderProduct); 
        
       
        const docRef = await addDoc(collection(db, "orders"), {
            nameCustomer: inputName.current.value,
            products: order,
            created : new Date(),
            status : "pending"
        });
    
        console.log("Document written with ID: ", docRef.id);
    
    }

    const btnMinus=(id)=>{
        // eslint-disable-next-line array-callback-return
        order.map((element) => {
            if(element.id===id && element.quantity >= 1){
                setOrder(
                    order.map((e)=>
                        e.id===element.id ?
                        { ...e,
                          quantity: e.quantity-1,
                        }: e 
                    )
                )
            }

        })        
    }

    const btnPlus= (id) => {
        // eslint-disable-next-line array-callback-return
        order.map((element) => {
            if(element.id === id && element.quantity >= 1) {
                setOrder(
                    order.map ((e) => 
                        e.id === element.id ?
                        {
                            ...e,
                            quantity: e.quantity+1,
                        }: e
                    )
                )
            }
        })
    }
    
    return (
       <>
       <div className="form-group">
                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text"><strong>CLIENT:</strong></span>
                        <input type="text" className="form-control" ref={inputName}/>
                    </div>  
                </div>
            </div>
            <br/>

            <div className='table-responsive'>
            <table className="table table-borderless" style={{width:'30%'}}>
                <thead className="table-active">
                    <tr>
                        <th>DESCRIPTION</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                {order.length === 0 ? (<tr>
                        <td>Add</td>
                        <td>Add</td>
                        <td>$.00</td>
                    </tr>) 
                    :
                    (order.map((product)=> (
                    <tr key={product.id}>
                        <td> {product.name} </td>
                        <td className ='quantityRow'>
                            <button className='btnsQuantity' onClick={()=> btnMinus(product.id)}> ➖ </button>
                            <p className ="amount">  {product.quantity}  </p>
                            <button className='btnsQuantity' onClick={()=> btnPlus(product.id)}> ➕ </button>
                        </td>
                        <td> $ {product.price}.00</td>
                    </tr> )
                    ))}
                </tbody>
                <tfoot className="table-active">
                    <tr>
                        <th>TOTAL</th>
                        <th></th>
                        <th>$ {total}.00</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <Button className="sendOrder" onClick={addOrdersFirebase}>SEND</Button>

    </>

        // </section>
    )
}

// agregar la funcion addProducts de Firebase(check-pero comprobar)
// agregar las funciones de mas y menos de productos (check)
// EVITAR QUE SE PUEDA CAMBIAR DE VENTANA SI EL USUARIO NO ESTA LOGEADO
