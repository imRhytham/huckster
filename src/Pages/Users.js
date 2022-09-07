import React, { useState, useEffect } from 'react';
import { ReactComponent as Spinner } from './../Assets/svgs/spinner.svg';
import SearchBar from '../Components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { getOrderList, getProductList, getUserList } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Components/Pagination';

const Users = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userList = useSelector((state) => state.users.users);
	const loading = useSelector((state) => state.users.loading);
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(10);

	useEffect(() => {
		dispatch(getOrderList());
		dispatch(getProductList());
		dispatch(getUserList());
	}, [dispatch]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		const filteredUsers = userList.filter((user) => {
			return user.name.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setUsers(filteredUsers);
	};

	useEffect(() => {
		setUsers(userList);
	}, [userList]);

	const indexOfFirstProduct = currentPage * recordsPerPage;
	const indexOfLastProduct = indexOfFirstProduct - recordsPerPage;
	const currentUsers = users.slice(indexOfLastProduct, indexOfFirstProduct);
	const pages = Math.ceil(users.length / recordsPerPage);

	return (
		<div className='w-full text-white flex flex-col justify-center items-center p-5'>
			{loading && !userList ? (
				<Spinner />
			) : (
				<>
					<SearchBar
						value={searchTerm}
						onChange={(e) => handleSearchChange(e)}
					/>
					<p className='text-3xl py-3'>Users</p>
					<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
								<tr className=''>
									<th className='py-3 px-10'>User ID</th>
									<th className='py-3 px-10'>Name</th>
								</tr>
							</thead>
							{currentUsers.map((user) => {
								return (
									<tbody key={user.user_id}>
										<tr
											className='cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700'
											onClick={() => navigate(`/users/${user.user_id}`)}
										>
											<td className='py-4 px-10'>{user.user_id}</td>
											<td className='py-4 px-10 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												{user.name}
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

export default Users;
