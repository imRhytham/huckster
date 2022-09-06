import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
	orders: orderReducer,
	products: productReducer,
	users: userReducer,
});

export default reducer;
