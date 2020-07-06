import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

import store from '.././store'
import getProducts from '.././action.js'


window.cart_store = store

const mapStateToProps = state => {
    console.log(state, "Cart Products")
  return { products: state.products };
};

class Cart extends React.Component {

            constructor(props){
                super(props);
                
            }




    render(){


    
        return (<div>{this.props.products ?  this.props.products.map((product) => <p> {product.name} </p> )  :  <p> Loading ... </p>} <Link to="/"> Go To Home </Link> </div>) ;



                    

            
    }
}

export default connect(mapStateToProps, null)(Cart);