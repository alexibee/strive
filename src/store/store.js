import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';
import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { modalReducer } from './modal/modal.reducer';

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
	modal: modalReducer,
});

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	thunk,
].filter(Boolean);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewares,
	devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
