import * as Actions from './../Type';

const initialState = {
	loading: false,
	orders: [],
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_ORDER_LOADER:
			return {
				...state,
				loading: action.payload,
			};
		case Actions.SET_ALL_ORDER_LIST:
			return {
				...state,
				orders: action.payload,
			};
		default:
			return state;
	}
};
