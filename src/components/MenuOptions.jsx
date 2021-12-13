import React, { useState, useEffect } from "react";
import './MenuOptions.css';
// import { Button,  ButtonGroup, ToggleButton } from 'react-bootstrap';
import Products from "./Products";

export const MenuOptions = () => {
    const [menu, setMenu] = useState([]);
    const [typeProduct, setTypeProduct] = useState('Breakfast');
    const [order, setOrder] =useState([]);
    
    const getProducts = async () => {
        const data = await fetch("data/menuData.json");//la data json debe estar ubicada en el directorio publico "public"
        const options = await data.json();
        // console.log(options);
        return options;
    }


    // Después de que se cargue la página ejecutará la función getProducts de manera asincrona y actualizara el estado de
    // las opciones del menú
    useEffect(() => {
        async function fetchList(){
            const listMenu = await getProducts()
            setMenu(listMenu.filter(item=> item.type === typeProduct))
        }
        fetchList()
    }, [typeProduct]) //<---Para que se ejecute cada vez que cambie el item.type (Breakfast o All Day)
    
    return (
            <div className='sectionMenu'>
                <br />
                <header className="menu"> MENU </header>
                
                <br />
                <button onClick={() => { setTypeProduct('Breakfast'); } }>BREAKFAST</button>
                <button onClick={() => { setTypeProduct('All Day'); } }>ALL DAY</button>

                <br/>
                <section className='optionsMenuType'>
                    { menu.map((product) => (//de cada objeto seleccionado los recorremos para sacar el nombre y el precio de cada uno
                        <Products 
                            className='btnBreak' 
                            key= {product.id} 
                            oder={order}
                            setOrder={setOrder}
                            product={product}
                            menu={menu}/> 
                            // <div> { element.product } </div> 
                            // <div> $. { element.price}.00 </div>
                    ))}
                </section>
            </div>
    )
}