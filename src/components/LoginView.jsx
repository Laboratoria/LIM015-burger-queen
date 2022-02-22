import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { app } from '../firebase'
import logo from '../images/logo.png';
import 'firebase/auth';
import './LoginView.css';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

export const LoginView = () => {
    //Router para mover a otra vista o página
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
            // console.log(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
            // console.log(e.target.value)
        }
    }

    // Funcion que envía la data de inputs y se activa al hacer click en "submit"
    const sendSubmit = (e) => {
        e.preventDefault(); // Para que al hacer click en sign in me evite actualizar la página
        // console.log(e);
        console.log(email, password)

        if (email === '' || password === '') {
            console.log('Ingresar correo y contraseña')
        } else if (email === 'waiter@burgerqueen.com') {
            app.auth().signInWithEmailAndPassword(email, password)
                .then((userFirebase) => {
                    const user = userFirebase.user;
                    console.log('Sesion Iniciada con : ', user)
                    history.push('/Menu')
                })
        }
    };


    return (
        <section className='Login'>
            <Row>
                <Col>
                    <div>
                        <Form onSubmit={sendSubmit} className='frameLogin' >
                            <Form.Group className ='head'>
                                <br/>
                                <br/>
                                {/* <select className='perfilSelection'>
                                    <option defaultValue>PERFIL</option>
                                    <option value='waiter'>Waiter</option>
                                    <option value='cheff'>Cheff</option>
                                </select> */}
                            <img src={logo} className='logoImage' alt='burgerLogo' style={{size: '17px'}}/>
                            </Form.Group>
                            <br/>
                            <br/>
                            <br/>
                            <Form.Group>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                <Form.Control
                                className= 'email'
                                // id='email'
                                name='email'
                                type = 'email'
                                onChange={ handleChange }
                                placeholder='Email Adrees'
                                />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    className='password'
                                    // id='password'
                                    name='password'
                                    type='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                />
                            </FloatingLabel>
                            </Form.Group>
                            
                            <br/>
                            <Button className='btn' variant="primary" type='submit'>SIGN IN</Button>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <div>
                        {/* <img src={fondo2} className='fondoImage' alt='BurgerImage'/> */}
                    </div>
                </Col>
            </Row>
        </section>
    )
}


