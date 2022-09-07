import React, { useState, useEffect } from 'react';
import { ReactComponent as Spinner } from './../Assets/svgs/spinner.svg';
import SearchBar from '../Components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { getOrderList, getProductList, getUserList } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Components/Pagination';

const Products = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.products.products);
	const loading = useSelector((state) => state.products.loading);
	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(10);

	useEffect(() => {
		dispatch(getOrderList());
		dispatch(getProductList());
		dispatch(getUserList());
	}, [dispatch]);

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

	const indexOfFirstProduct = currentPage * productsPerPage;
	const indexOfLastProduct = indexOfFirstProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfLastProduct,
		indexOfFirstProduct
	);
	const pages = Math.ceil(products.length / productsPerPage);

	return (
		<div className='w-full text-white flex flex-col justify-center items-center p-5'>
			{loading && !productList ? (
				<Spinner />
			) : (
				<>
					<SearchBar
						value={searchTerm}
						onChange={(e) => handleSearchChange(e)}
					/>
					<p className='text-3xl py-3'>Products</p>
					<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
								<tr className=''>
									<th className='py-3 px-10'>product ID</th>
									<th className='py-3 px-10'>Name</th>
									<th className='py-3 px-10'>Stock</th>
									<th className='py-3 px-10'>Selling Price</th>
								</tr>
							</thead>

							{currentProducts.map((product) => {
								return (
									<tbody>
										<tr
											className='cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700'
											onClick={() =>
												navigate(`/products/${product.product_id}`)
											}
										>
											<td className='py-4 px-10'>{product.product_id}</td>
											<td className='py-4 px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												{product.name}
											</td>
											<td className='py-4 px-10'>{product.stock}</td>
											<td className='py-4 px-10'>{product.selling_price}</td>
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

export default Products;
