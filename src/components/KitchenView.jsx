import React,{ useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../firebase";
import "./KitchenView.css";

export const KitchenView = () => {
  const [pendingOrders, setPendingOrders] = useState([]);


  // codigo firestore para obtener data en tiempo real
  const getOrders = async () => {
    const q= query(collection(db, "orders"), where('status', '==', 'pending'));
    onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      console.log(docs);
      setPendingOrders(docs);
    });
    
  };

  // Pintar las ordenes pendientes obtenidas de firestore
  useEffect(()=>{
    getOrders();
  }, []);

  return (
    <section className="generalBox container">
      <header className="ordersHead"> ORDERS </header>
          {pendingOrders.map(order => (
      <section className="subGeneralBox">
        <section className="headerOfGeneralBox">
            <div className="nameClient boxes"> Client: {order.nameCustomer}</div>
          <div className="hourSection">
            <div className="checkinTime boxes "> Check-in time:{} </div>
            
            <div className="endTime boxes"> End time: </div>
            <div className="chronometer">"Aqui va a ir el cronometro"</div>
          </div>
        </section>
        <section className="mainBox boxes">
        {/* {console.log("Products",order.products)} */}
            {order.products.map((product)=>
          <button className="check p-2 m-2" type="check">
             {product.name} <br /> Quantity: {product.quantity}
            {/* {console.log(product.name)} */}
          </button>
            )}
        </section>
        <section className="sectionSubmit">
          <button className="btnComplete">COMPLETE</button>
        </section>
      </section>
          ))}
    </section>
  );
};

// Pendiente hacer cronómetro
