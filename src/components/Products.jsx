import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

export default function Products({product, menu, order, setOrder}) {
    //constante que guarda las propiedades del estado de cada uno de los productos
    const { id, name, price} = product;

    //Funcion para agregar productos a la sección orders
    const orderProducts =(id)=>{
        const product= menu.find((product)=> product.id === id)
        if(product){
            setOrder(
              order.map((items)=>
              items.id=== id ?
              {...product, quantity: product.quantity+1} : items )
            )
        }
    }
  return (
    <Fragment>
      <Button key={id} onClick= {()=>orderProducts(id)}>
        <div> {name} </div>
        <div> $. {price}.00 </div>
      </Button>
      
      {/* <ul>
        <li >{name}</li>
        <li >{price}</li>
        <Button type='button'>Agregar +</Button>
      </ul> */}
    </Fragment>
  );
}
