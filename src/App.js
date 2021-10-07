// import Logo from './img';
import './App.css';
// import React from 'react';
// import hamburguesa from './img/hamburguesa.jpg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home.jsx'
import Cocinero from './pages/kitchen.jsx'
import Mesero from './pages/waiter.jsx'


// const Home = () => <h1>Este es el home</h1>
// const Cocinero = () => <h1>Este es cocinero</h1>
// const Mesero = () => <h1>Este es mesero</h1>

const App = () => {
  return (
    <BrowserRouter>
      {/* <button>
        <Link to='/'>
          Home
        </Link>
      </button> */}
      {/* <button>
      <Link to='/Cocinero'>
        Cocinero
      </Link>
      </button>
      <button>
      <Link to='/Mesero'>
        Mesero
      </Link>
      </button> */}


      <Switch>
        <Route path='/Cocinero'>
          <Cocinero />
        </Route>
        <Route path='/Mesero'>
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