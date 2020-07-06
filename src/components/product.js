import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import store from '.././store'
import getProducts from '.././action'

function mapDispatchToProps(dispatch) {
  return {
    getProducts: products => dispatch(getProducts())
  };
}

const mapStateToProps = state => {
  return { products: state.products };
};


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: props.products
    };
  }

  componentDidMount() {
    
    this.props.getProducts();
      
  }

  render() {
    const { error, isLoaded, items } = {error: false, isLoaded:true, items:this.state.items};
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <ul>
          {items.map(item => (
            <li key={item.name}>
              <Link to={`/product-detail/${item.id}`}> {item.name} {item.price} </Link>
            </li>
          ))} 
        </ul>
        <Link to={`/cart`}> Go To Cart </Link>
        </div>
      );


    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Product);
