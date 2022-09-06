import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { getOrderList, getProductList, getUserList } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.products.products);
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		dispatch(getOrderList());
		dispatch(getProductList());
		dispatch(getUserList());
	}, [dispatch]);

	useEffect(() => {
		setProducts(productList);
	}, [productList]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		const filteredProducts = productList.filter((product) => {
			return product.name.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setProducts(filteredProducts);
	};

	useEffect(() => {
		setProducts(productList);
	}, [productList]);

	return (
		<div className='w-full text-white flex flex-col justify-center items-center p-5'>
			<SearchBar value={searchTerm} onChange={(e) => handleSearchChange(e)} />
			<p className='text-3xl py-3'>Products</p>
			<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr className=''>
							<th className='py-3 px-8'>product_id</th>
							<th className='py-3 px-8'>Name</th>
							<th className='py-3 px-8'>Stock</th>
							<th className='py-3 px-8'>Selling Price</th>
						</tr>
					</thead>

					{products.map((product) => {
						return (
							<tbody>
								<tr
									className='cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700'
									onClick={() => navigate(`/products/${product.product_id}`)}
								>
									<td className='py-4 px-8'>{product.product_id}</td>
									<td className='py-4 px-8 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										{product.name}
									</td>
									<td className='py-4 px-8'>{product.stock}</td>
									<td className='py-4 px-8'>{product.selling_price}</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default Products;
