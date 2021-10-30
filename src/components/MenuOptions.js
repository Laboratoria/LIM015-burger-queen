import React, { useState, useEffect } from "react";
import './MenuOptions.css'
import { Button } from 'react-bootstrap';

export const MenuOptions = () => {
    const [menu, setMenu] = useState([]);
    const [typeProduct, setTypeProduct] = useState('Breakfast')
    
    const getProducts = async () => {
        const data = await fetch("data/menuData.json");//la data json debe estar ubicada en el directorio publico "public"
        const options = await data.json();
        console.log(options);
        return options;
    }


    // Después de que se cargue la página ejecutará la función obtainData
    useEffect(() => {
        async function fetchList(){
            const listMenu = await getProducts()
            setMenu(listMenu.filter(item=> item.type ===typeProduct))
        }
        fetchList()
    }, [typeProduct]) //<---Para que se ejecute solo una vez

    
    return (
            <div className='sectionMenu'>
                <br />
                <header className="menu"> MENU </header>
                
                <br />
                <button onClick={() => { setTypeProduct('Breakfast'); } }>BREAKFAST</button>
                <button onClick={() => { setTypeProduct('All Day'); } }>ALL DAY</button>

                <br/>
                <section className='optionsBreakfast'>
                    { menu.map((element) => (//de cada objeto seleccionado los recorremos para sacar el nombre y el precio de cada uno
                        <Button className='btnBreak' key= {element.id}> 
                            <div> { element.product } </div> 
                            <div> $. { element.price}.00 </div>
                        </Button>
                    ))}
                </section>
            </div>
    )
}