import React from "react";
import "./KitchenView.css";

export const KitchenView = () => {
  return (
      <section className="generalBox container">
        <header className="ordersHead"> ORDERS </header>
        <br />
        <section className="subGeneralBox">
          <section className="headerOfGeneralBox">
            <div className="nameClient"> Client: {}</div>
            <div className="hourSection">
              <div className="checkinTime"> Check-In Time: </div>
              <div className="checkinTime"> End Time: </div>
              <div className="chronometer">"Aqui va a ir el cronometro"</div>
            </div>
            <div className="mainBox">
              <button type="check">ProductName:{} <br /> Quantity: {}</button>
              <div>Poner un check verde encimadel cuadrado </div>
            </div>
            <button className="btnComplete">COMPLETE</button>
          </section>
        </section>
      </section>
  );
};
