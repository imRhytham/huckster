import React from 'react';
import { ReactComponent as Search } from './../Assets/svgs/search.svg';
const SearchBar = ({ onChange, value }) => {
	return (
		<div className='w-2/12 h-9 flex flex-row justify-around items-center bg-white rounded overflow-hidden'>
			<input
				className='active:outline-none w-10/12 h-full bg-transparent focus:outline-none text-black'
				type='text'
				placeholder='Search'
				onChange={onChange}
				value={value}
			/>
			<Search />
		</div>
	);
};

export default SearchBar;
