import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import { getOrderList, getProductList, getUserList } from '../Redux/actions';
const Orders = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const orderList = useSelector((state) => state.orders.orders);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		dispatch(getOrderList());
		dispatch(getProductList());
		dispatch(getUserList());
	}, [dispatch]);

	useEffect(() => {
		setOrders(orderList);
	}, [orderList]);

	return (
		<div className='w-full text-white flex flex-col justify-center items-center p-5'>
			<SearchBar />
			<p className='text-3xl py-3'>Orders</p>
			<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr className=''>
							<th className='py-3 px-6'>order_id</th>
							<th className='py-3 px-6'>product_id</th>
							<th className='py-3 px-6'>user_id</th>
							<th className='py-3 px-6'>quantity</th>
							<th className='py-3 px-6'>date</th>
						</tr>
					</thead>

					{orders.map((order) => {
						return (
							<tbody>
								<tr
									className='cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700'
									onClick={() => navigate(`/orders/${order.order_id}`)}
								>
									<td className='py-4 px-6'>{order.order_id}</td>
									<td className='py-4 px-6'>{order.product_id}</td>
									<td className='py-4 px-6'>{order.user_id}</td>
									<td className='py-4 px-6'>{order.quantity}</td>
									<td className='py-4 px-6'>{order.order_date}</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default Orders;
