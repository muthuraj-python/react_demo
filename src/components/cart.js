import React from 'react';



class Cart extends React.Component {

	constructor(props){
		super(props);
		this.state = {products: [],
			total: 0,};
	}

	render(){

		return <div>Cart</div>
	}
}

export default Cart;