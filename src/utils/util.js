export const getProductByID = ({ id, products }) => {
	if (products.length) {
		const product = products.find((product) => product.product_id === id);
		return product;
	}
};

export const getUserByID = ({ id, users }) => {
	if (users.length) {
		const user = users.find((user) => user.user_id === id);
		return user;
	}
};

export const getOrdersByUserID = ({ id, orders }) => {
	if (orders.length) {
		const userOrders = orders.filter((order) => order.user_id === parseInt(id));
		return userOrders;
	}
};

export const getOrdersbyProductID = ({ id, orders }) => {
	if (orders.length) {
		const productOrders = orders.filter(
			(order) => parseInt(id) === order.product_id
		);
		return productOrders;
	}
};
