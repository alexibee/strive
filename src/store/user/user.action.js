import { createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUserStart = () =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER_START);

export const setCurrentUserSuccess = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER_SUCCESS, user);

export const setCurrentUserFail = (error) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER_FAIL, error);

export const setCurrentUserAsync = (user) => async (dispatch) => {
	dispatch(setCurrentUserStart());
	try {
		if (user) {
			await createUserDocFromAuth(user);
		}
		dispatch(setCurrentUserSuccess(user));
	} catch (error) {
		dispatch(setCurrentUserFail(error));
	}
};
