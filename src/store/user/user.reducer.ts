import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
	emailSignInStart,
	googleSignInStart,
	signInFail,
	signInSuccess,
	signOutFail,
	signOutStart,
	signOutSuccess,
	signUpFail,
} from './user.action';

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const USER_INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (
	state = USER_INITIAL_STATE,
	action: AnyAction
): UserState => {
	if (signInSuccess.match(action)) {
		return {
			...state,
			currentUser: action.payload,
			isLoading: false,
			error: null,
		};
	}
	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null, isLoading: false, error: null };
	}
	if (
		signOutStart.match(action) ||
		googleSignInStart.match(action) ||
		emailSignInStart.match(action)
	) {
		return { ...state, isLoading: true, error: null };
	}
	if (
		signOutFail.match(action) ||
		signInFail.match(action) ||
		signUpFail.match(action)
	) {
		return { ...state, error: action.payload, isLoading: false };
	}
	return state;
};
