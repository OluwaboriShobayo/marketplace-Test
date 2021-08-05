// import React, {useState} from 'react';
import Body from './Components/Body';
import Input from './Components/Input';
import Categories from './Components/Categories';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Router>
     <header>
       <b><a href="#" id="food">Food</a></b>
       <b><a href="#"id="bag">Bag</a></b>
       <div className="right">
          <a href="./Components/Cart" id="cart">Cart</a>
          <a href="#" id="login">Login</a>
          <a href="#" id="signUp">Sign up</a>
       </div>
     </header>
    <Body />
    <Input />
    <Categories />
    <Services />
    <Footer />
    <Cart />
   <Switch>
        <Route path="/" exact component={() => <Cart />} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
