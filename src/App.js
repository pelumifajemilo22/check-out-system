import React, { Component } from 'react'
import "./App.css";
import {Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/Navbar/NavBar'
import ProductList from './components/Product/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Modal from './components/Modal/Modal'


export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                 <NavBar/>
            <Switch>
            <Route exact path='/' component = {ProductList}/>
            <Route path='/details' component = {Details}/>
            <Route path='/carts' component = {Cart}/>
            <Route component = {PageNotFound}/>

            </Switch>
            <Modal/>
            
            </React.Fragment>
           
                 
            
           
            
          
        )
    }
}
