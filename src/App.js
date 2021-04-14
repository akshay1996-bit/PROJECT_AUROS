import React, { Component } from 'react';
import Home from './components/homePage/homepage';
import Footer from './components/Footer';
import Navbar from './components/homePage/Navbar';
import Productslist from './components/productsPage/productList';
import Contact from './components/contact';
import ProductDetails from './components/productsPage/productDetails';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Cart from './components/cart/cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 

      <BrowserRouter>
    <div>
    <Navbar/>
    
      <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Productslist}/>
        <Route path="/products/:name" component={ProductDetails}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/cart" component={Cart}/>

        

        </Switch>
        <Footer/>
    </div> 
    </BrowserRouter>
    );
  }
}
 
export default App;