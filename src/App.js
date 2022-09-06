import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Orders from './Pages/Orders';
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';
import UserDetails from './Pages/UserDetails';
import Users from './Pages/Users';
import store from './Redux/Store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Orders />} />
					<Route path='/products' element={<Products />} />
					<Route path='/users' element={<Users />} />
					<Route path='/products/:product_id' element={<ProductDetails />} />
					<Route path='/users/:user_id' element={<UserDetails />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
