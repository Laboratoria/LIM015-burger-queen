import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

export default function Product({product, menu, order, setOrder}) {
    //constante que guarda las propiedades del estado de cada uno de los productos
    const { id, name, price} = product;

    //Funcion para agregar productos a la sección orders
    const orderProducts = (id) =>{
        const product= menu.filter((element)=> element.id === id);
        console.log(product)
        setOrder([...order, ...product])
        // if(product){
        //     setOrder(
        //       order.map((element)=>
        //       element.id === product.id ? { ...order,
        //         quantity: product.quantity + 1,
        //         ...product} : element )
        //     )
        // } else{
        //   setOrder([...order, {...product, quantity:1}]);
        // }
    }
  return (
    <Fragment>
      {menu ? (
        <Button key={id} onClick={() => orderProducts(id)}>
          <div> {name} </div>
          <div> $. {price}.00 </div>
        </Button>
         ):
         (<></>)
      }
    </Fragment>
  );
}
