import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Loginin} from './Loginin';
import {Singup} from './Singup';
import {Oferta} from './Oferta';
import {Desserts} from './Desserts';
import {KidsMeal} from './KidsMeal';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
     ONLINEFOOD ORDER
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/loginin">
              Loginin
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/singup">
              Singup
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/oferta">
              Oferta
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/desserts">
              Desserts
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/kidsMeal">
              KidsMeal
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/loginin' component={Loginin}/>
        <Route path='/singup' component={Singup}/>
        <Route path='/oferta' component={Oferta}/>
        <Route path='/desserts' component={Desserts}/>
        <Route path='/kidsMeal' component={KidsMeal}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;