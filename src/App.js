import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Model from "./components/Model";
class App extends Component{
  render(){
    return(
  <React.Fragment>
    <Navbar/>
    <Routes>
      <Route path='/' Component={ProductList} />
      <Route path='/details' Component={Details} />
      <Route path='/cart' Component={Cart} />
      <Route path="*" Component={Default} />
    </Routes>
   <Model />
  </React.Fragment>
    )
  }
}

export default App;
