import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';

import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.currentUser);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, []);

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
