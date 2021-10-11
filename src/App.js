// import Logo from './img';
import './App.css';
// import React from 'react';
// import hamburguesa from './img/hamburguesa.jpg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Cocinero from './components/pages/kitchen.jsx'
import Mesero from './components/pages/waiter.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cocinero'>
          <Cocinero />
        </Route>
        <Route path='/mesero'>
          <Mesero />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export { App };