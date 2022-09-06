import * as Actions from './../Type';

const initialState = {
	loading: false,
	users: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_USER_LOADER:
			return {
				...state,
				loading: action.payload,
			};
		case Actions.SET_ALL_USER_LIST:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};
