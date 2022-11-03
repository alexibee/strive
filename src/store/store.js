import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';

export const rootReducer = {
	user: userReducer,
};

const middlewares = [logger];

export const store = configureStore({
	reducer: rootReducer,
	middleware: middlewares,
});
