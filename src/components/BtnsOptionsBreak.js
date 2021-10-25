import React from 'react'
import { useState } from 'react/cjs/react.development'

const BtnsOptionsBreak =()=>{
    
    const [option, SetOption] = useState('');

    const addOptions =()=>{
        
    }

    return (
        <section className= 'optionsBreak'>
            <input className='option1'type='button' value={addOptions}></input>
            <input className='option1'type='button' value='American Coffe $ 5.00'></input>
            <input className='option2'type='button' value='Coffee with Milk $ 7.00'></input>
            <input className='option3'type='button' value='Sandwich $10.00'></input>
            <input className='option4'type='button' value='Juice $ 7.00'></input>
            
            {/* <button className='option1'> American Coffe $ 5.00</button>
            <button className='option2'> Coffee with Milk $ 7.00</button>
            <button className='option3'> Sandwich $10.00 </button>
            <button className='option4'> Juice $ 7.00 </button> */}
        </section>
    )
}

export default BtnsOptionsBreak