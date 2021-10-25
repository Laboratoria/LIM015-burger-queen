import React, {Fragment, useState} from 'react';
import { useHistory } from 'react-router';
import { app } from '../firebase'
import logo from '../images/logo.png';
import 'firebase/auth';
import './LoginView.css';

export const LoginView = () =>{
    //Router para mover a otra vista o página
    const history = useHistory();

    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const handleChange =(e)=>{
        if (e.target.name === 'email'){
            setEmail(e.target.value)
            console.log(e.target.value)
        } else if (e.target.name === 'password'){
            setPassword(e.target.value);
            console.log(e.target.value)
        }
    }

    const sendSubmit = (e) =>{
        e.preventDefault(); // Para que al hacer click en sign in me evite actualizar la página
        // console.log(e);
        console.log(email, password)
               
        if(email === '' || password === '' ){
            console.log('Ingresar correo y contraseña')
        } else if(email === 'hola@hola.com') {
            app.auth().signInWithEmailAndPassword(email,password)
            .then((userFirebase)=>{
                const user = userFirebase.user;
                console.log('Sesion Iniciada con : ', user)
                history.push('/Menu')
        })
        }
    };


    return(
        <Fragment>
          <section className='Login'>
            <div className="frameLogin">
              <form onSubmit={sendSubmit}>
                <div className='perfilSelection'>
                <select className='perfil'>
                    <option defaultValue>PERFIL</option>
                    <option value='waiter'>Waiter</option>
                    <option value='cheff'>Cheff</option>
                </select>
                </div>
                <img src={logo} className='logoImage' alt='burgerLogo'/>
                <input
                    className= 'email' 
                    id='email'
                    name='email'
                    type= 'email' 
                    onChange={ handleChange }
                    placeholder='Email Adrees'>
                </input>
                <input 
                    className= 'password' 
                    id='password' 
                    name='password'
                    type= 'password'
                    onChange={ handleChange }
                    placeholder='Password'>
                </input>
                <button className='sigin' type='submit'>SIGN IN</button>
              </form>
            </div>
          </section>
        </Fragment> 
    )
}


