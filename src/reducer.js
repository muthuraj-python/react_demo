const initialState = {
	isLoadted: false,
  	products: [],
  	error: null
};

function rootReducer(state = initialState, action) {
	if (action.type === 'GET_PRODUCTS'){

		console.log(action.payload,action.type, "Action.PayLoad");

	return Object.assign({}, state, {
      products: action.payload
    });
		
		
		
	}

	return state
  	
}


export default rootReducer;