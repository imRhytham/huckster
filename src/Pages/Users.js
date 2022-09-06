import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { getOrderList, getProductList, getUserList } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userList = useSelector((state) => state.users.users);
	const [users, setUsers] = useState([]);

	console.log(users);
	useEffect(() => {
		dispatch(getOrderList());
		dispatch(getProductList());
		dispatch(getUserList());
	}, [dispatch]);

	useEffect(() => {
		setUsers(userList);
	}, [userList]);

	return (
		<div className='w-full text-white flex flex-col justify-center items-center p-5'>
			<SearchBar />
			<p className='text-3xl py-3'>Users</p>
			<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr className=''>
							<th className='py-3 px-10'>user_id</th>
							<th className='py-3 px-10'>name</th>
						</tr>
					</thead>
					{users.map((user) => {
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
		</div>
	);
};

export default Users;
