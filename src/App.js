import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route, redirect } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { UserContext } from './contexts/user.context';
import { useContext } from 'react';

const App = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='shop/*'
					element={currentUser ? <Shop /> : <Authentication />}
				/>
				<Route
					path='auth'
					element={!currentUser ? <Authentication /> : <Home />}
				/>
				<Route
					path='checkout'
					element={<Checkout />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
