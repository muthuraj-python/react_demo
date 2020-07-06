import React from 'react'
import { Link} from "react-router-dom";



class ProductDetail extends React.Component {

	constructor(props) {
    super(props);
 
   
 }


	render(){
		console.log(this.props.maths)
		return <div>Product Id = {this.props.match.params.productId} 
		<Link to={`/`}> Back To Home </Link></div>

	}
}

export default ProductDetail