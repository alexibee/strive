import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';
import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(
	Boolean
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewares,
});

export const persistor = persistStore(store);
