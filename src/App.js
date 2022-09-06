import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import Users from './Pages/Users';
import store from './Redux/Store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='/products' element={<Products />} />
					<Route path='/users' element={<Users />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
