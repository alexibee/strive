import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import { setCurrentUserAsync } from './store/user/user.action';

import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import PrivateRoute from './routes/private-route/PrivateRoute';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) =>
			dispatch(setCurrentUserAsync(user))
		);
		return unsubscribe;
	}, []);

	return (
		<Routes>
			<Route
				exact
				path='/'
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='shop/*'
					element={
						<PrivateRoute>
							<Shop />
						</PrivateRoute>
					}
				/>
				<Route
					path='checkout'
					element={
						<PrivateRoute>
							<Checkout />
						</PrivateRoute>
					}
				/>
				<Route
					path='auth'
					element={<Authentication />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
