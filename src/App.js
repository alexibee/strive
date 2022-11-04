import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';

import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';
import { selectCurrentUser } from './store/user/user.selector';

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

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
					element={currentUser ? <Shop /> : <Navigate to='/auth' />}
				/>
				<Route
					path='auth'
					element={!currentUser ? <Authentication /> : <Navigate to='/' />}
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
