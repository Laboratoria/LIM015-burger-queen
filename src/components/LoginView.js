import React from 'react';
import logo from '../images/logo.png';
import './LoginView.css';

const LoginView =()=>{
    return(
        <div className='Login'>
            <div className="frameLogin">
                <div className='perfilSelection'>
                <select className='perfil'>
                    <option disabled selected>PERFIL</option>
                    <option value='waiter'>Waiter</option>
                    <option value='cheff'>Cheff</option>
                </select>
                </div>
                <img src={logo} className='logoImage' alt='burgerLogo'/>
                <input className= 'email' placeholder='Email Adrees'></input>
                <input className= 'password' placeholder='Email Adrees'></input>
                <button className='sigin'>SIGN IN</button>
            </div>
        </div>
    )
}
export default LoginView;

