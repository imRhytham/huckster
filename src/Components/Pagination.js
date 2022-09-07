import React from 'react';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
	const pageNumber = [...Array(pages + 1).keys()].slice(1);

	const nextPage = () => {
		if (currentPage < pages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<nav>
			<ul className='flex items-center justify-center p-5'>
				<li>
					<button
						onClick={prevPage}
						className='px-3 py-1 rounded-md  mr-1 bg-[#36B9F2] text-gray-600 hover:bg-[#36B9Ff]'
					>
						Prev
					</button>
				</li>
				{pageNumber.map((number) => (
					<li key={number}>
						<button
							onClick={() => setCurrentPage(number)}
							className={`px-3 py-1 rounded-md text-gray-600 hover:hover:bg-[#36B9Ff] mr-1 ${
								currentPage === number ? 'bg-[#36B9F2]' : 'bg-gray-200'
							}`}
						>
							{number}
						</button>
					</li>
				))}
				<li>
					<button
						onClick={nextPage}
						className='px-3 py-1 rounded-md bg-[#36B9F2] text-gray-600 hover:bg-[#36B9Ff]'
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
