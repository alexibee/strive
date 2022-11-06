import { USER_ACTION_TYPES } from './user.types';

const USER_INITIAL_STATE = {
	currentUser: null,
	isLoading: true,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER_START:
			return { ...state, isLoading: true };
		case USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS:
			return { ...state, currentUser: payload, isLoading: false };
		case USER_ACTION_TYPES.SET_CURRENT_USER_FAIL:
			return { ...state, error: payload, isLoading: false };
		default:
			return state;
	}
};
