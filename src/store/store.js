import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';
import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/modal.reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
// import thunk from 'redux-thunk';

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

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	// thunk,
	sagaMiddleware,
].filter(Boolean);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewares,
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
