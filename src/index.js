import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    
} from "react-router-dom";
import { Provider } from "react-redux";

import Product from './components/product'
import ProductDetail from './components/product_details'
import Cart from './components/cart'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store.js'
import getProducts from './action.js'

window.store =store;
window.getProducts = getProducts;


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
        <Router>
            <div>
                <Switch>
                      <Route exact path="/" component={App} />
                      <Route exact path="/products" component={Product} />
                      <Route exact path="/cart" component={Cart} />
                      <Route exact path="/product-detail" component={ProductDetail} />
                      <Route path = "/product-detail/:productId" component={ProductDetail} />
                </Switch>
            </div>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
