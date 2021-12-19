import React from "react";
import "./KitchenView.css";

export const KitchenView = () => {
  return (
      <section className="generalBox container">
        <header className="ordersHead"> ORDERS </header>
        <section className="subGeneralBox">
          <section className="headerOfGeneralBox">
            <div className="nameClient boxes"> Client: {}</div>
            <div className="hourSection">
              <div className="checkinTime boxes "> Check-in time: </div>
              <div className="endTime boxes"> End time: </div>
              <div className="chronometer">"Aqui va a ir el cronometro"</div>
            </div>
          </section>
          <section className="mainBox boxes">
            <button className='check' type="check">Sandwich{} <br /> 4 {}</button>
          </section>
          <section className='sectionSubmit'>
          <button className="btnComplete">COMPLETE</button>
          </section>
        </section>
      </section>
  );
};
