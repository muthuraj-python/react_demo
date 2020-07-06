import React from 'react';
import Product from './components/product'
import Cart from './components/cart'
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.time}
        </a>
      </header>

      <Product />
      <Cart />

    </div>
  );
}

export default App;
