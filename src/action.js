import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

const getProdcutAction = (payload) => {

	console.log(payload, "Payload");

	return ({type: GET_PRODUCTS, payload})
}




export default function getProducts() {
  return function(dispatch) {
    return axios.get('http://localhost:8000/product/').then(function(res) {
      // pretend we declared an action creator
      // called 'userLoggedOut', and now we can dispatch it
      dispatch({type: GET_PRODUCTS, payload: res.data});
    });
  };
}





