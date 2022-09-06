import * as Actions from './../Type';

const initialState = {
	loading: false,
	products: [],
};

export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_PRODUCT_LOADER:
			return {
				...state,
				loading: action.payload,
			};
		case Actions.SET_ALL_PRODUCT_LIST:
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};
