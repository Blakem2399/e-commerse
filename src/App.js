import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart'
import ProductList from './components/ProductList'
import Default from './components/Default'
import Details from './components/Details'


class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={ProductList}/>
                <Route path='/details' component={Details} />
                <Route path='/cart' component={Cart}/>
                <Route  component={Default}/>
            </Switch>


        </React.Fragment>
    );
  }
}

export default App;
