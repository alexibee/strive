import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

const rootReducer = {
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
};

const middlewares = [logger];

export const store = configureStore({
	reducer: rootReducer,
	middleware: middlewares,
});
