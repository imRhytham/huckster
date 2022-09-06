import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className='w-full flex justify-center items-center text-white space-x-8 border border-[#4A5463] bg-[#1F2836] p-4 drop-shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-40'>
			<div className=''>
				<img
					className='h-10 w-10 rounded-full cursor-pointer'
					src={require('../Assets/icon.png')}
					alt='logo'
				/>
			</div>
			<div
				className='cursor-pointer text-xl  hover:text-[#36B9F2] active:text-[#36B9Ff] transition duration-150 ease-in-out'
				onClick={() => {
					navigate('/');
				}}
			>
				Orders
			</div>
			<div
				className='cursor-pointer text-xl  hover:text-[#36B9F2] active:text-[#36B9Ff] transition duration-150 ease-in-out'
				onClick={() => {
					navigate('/products');
				}}
			>
				Products
			</div>
			<div
				className='cursor-pointer text-xl  hover:text-[#36B9F2] active:text-[#36B9Ff] transition duration-150 ease-in-out'
				onClick={() => {
					navigate('/users');
				}}
			>
				Users
			</div>
		</div>
	);
};

export default Navbar;
