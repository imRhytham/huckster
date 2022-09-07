import React, { useState, useEffect } from 'react';
import { ReactComponent as Spinner } from './../Assets/svgs/spinner.svg';

import { useParams } from 'react-router-dom';
import { getOrderList } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
	getOrdersbyProductID,
	getProductByID,
	getUserByID,
} from '../utils/util';
import Pagination from '../Components/Pagination';

const ProductDetails = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.products.products);
	const orderList = useSelector((state) => state.orders.orders);
	const userList = useSelector((state) => state.users.users);
	const loading = useSelector((state) => state.orders.loading);
	const [orders, setOrders] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(10);

	useEffect(() => {
		dispatch(getOrderList());
	}, [dispatch]);

	useEffect(() => {
		const filteredOrders = getOrdersbyProductID({
			id: params.product_id,
			orders: orderList,
		});
		setOrders(filteredOrders);
	}, [orderList, params.product_id]);

	const indexofLastOrder = currentPage * recordsPerPage;
	const indexOfFirstOrder = indexofLastOrder - recordsPerPage;
	const currentOrders = orders.slice(indexOfFirstOrder, indexofLastOrder);
	const pages = Math.ceil(orders.length / recordsPerPage);

	return (
		<div className='w-full text-white flex flex-col justify-center items-center p-5'>
			{loading && !orderList ? (
				<Spinner />
			) : (
				<>
					<p className='text-3xl py-3'>
						Orders with{' '}
						{
							getProductByID({
								id: parseInt(params.product_id),
								products: productList,
							})?.name
						}
					</p>
					<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
								<tr className=''>
									<th className='py-3 px-10'>order ID</th>
									<th className='py-3 px-10'>product</th>
									<th className='py-3 px-10'>user</th>
									<th className='py-3 px-10'>quantity</th>
									<th className='py-3 px-10'>Total Price</th>
									<th className='py-3 px-10'>date</th>
								</tr>
							</thead>

							{currentOrders.map((order) => {
								return (
									<tbody key={order?.order_id}>
										<tr className=' bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
											<td className='py-4 px-10'>{order.order_id}</td>
											<td className='py-4 px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												{
													getProductByID({
														id: order.product_id,
														products: productList,
													})?.name
												}
											</td>
											<td className='py-4 px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												{
													getUserByID({ id: order.user_id, users: userList })
														?.name
												}
											</td>
											<td className='py-4 px-10'>{order.quantity}</td>
											<td className='py-4 px-10'>
												$
												{order.quantity *
													getProductByID({
														id: order.product_id,
														products: productList,
													})?.selling_price}
											</td>
											<td className='py-4 px-10'>
												{new Date(
													JSON.parse(order.order_date)
												).toLocaleDateString()}
											</td>
										</tr>
									</tbody>
								);
							})}
						</table>
					</div>
					<Pagination
						pages={pages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</>
			)}
		</div>
	);
};

export default ProductDetails;
