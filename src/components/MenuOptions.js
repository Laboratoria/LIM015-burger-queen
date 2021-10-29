import React, { useState, useEffect } from "react";
import './MenuOptions.css'
import { Button, ButtonGroup, ToggleButton} from 'react-bootstrap';

export const MenuOptions = () => {
    const [radioValue, setRadioValue] = useState('1');
    const [option, setOption] = useState([]);
  
    const radios = [
      { name: 'BREAKFAST', value: '1' },
      { name: 'ALL DAY', value: '2' },
    ];


    // Después de que se cargue la página ejecutará la función obtainData
    useEffect(() => {
        obtainData()
    }, []) //<---Para que se ejecute solo una vez

    const obtainData = async () => {
        const data = await fetch("data/menuData.json");//la data json debe estar ubicada en el directorio publico "public"
        const options = await data.json();
        console.log(options);
        setOption(options);
    }
    return (
            <div className='sectionMenu'>
                <br />
                <header className="menu"> MENU </header>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                        {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <br/>
                {/* <div className='optionsMenu'> */}
                <section className='optionsBreakfast'>
                    {option.map((item) => ( // aca una function descriptiva
                        <Button className='btnBreak'> 
                            <div> { item.product } </div> 
                            <div> $. { item.price}.00 </div>
                        </Button>
                    ))}
                </section>
                <section className = 'optionsAllDay'>
                    {option.map((item)=>(
                        <Button className='btnAll'>
                            <div>{ item.price}</div>
                        </Button>
                    ))}
                </section>
                {/* </div>     */}
            </div>
    )
}