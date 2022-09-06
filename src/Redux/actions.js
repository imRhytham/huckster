import * as Actions from './Type';
import axios from 'axios';

const setUserLoader = (payload) => {
	return {
		type: Actions.SET_USER_LOADER,
		payload,
	};
};

const setOrderLoader = (payload) => {
	return {
		type: Actions.SET_ORDER_LOADER,
		payload,
	};
};

const setProductLoader = (payload) => {
	return {
		type: Actions.SET_PRODUCT_LOADER,
		payload,
	};
};

export const getUserList = () => async (dispatch) => {
	try {
		dispatch(setUserLoader(true));
		const response = await axios.get('https://assessment.api.vweb.app/users');
		const data = response.data;
		console.log(data);
		dispatch({
			type: Actions.SET_ALL_USER_LIST,
			payload: data,
		});
	} catch (error) {
	} finally {
		setUserLoader(false);
	}
};

export const getOrderList = () => async (dispatch) => {
	try {
		dispatch(setOrderLoader(true));
		const response = await axios.get('https://assessment.api.vweb.app/orders');
		const data = response.data;
		dispatch({
			type: Actions.SET_ALL_ORDER_LIST,
			payload: data,
		});
	} catch (error) {
	} finally {
		setOrderLoader(false);
	}
};

export const getProductList = () => async (dispatch) => {
	try {
		dispatch(setProductLoader(true));
		const response = await axios.get(
			'https://assessment.api.vweb.app/products'
		);
		const data = response.data;
		dispatch({
			type: Actions.SET_ALL_PRODUCT_LIST,
			payload: data,
		});
	} catch (error) {
	} finally {
		setProductLoader(false);
	}
};
