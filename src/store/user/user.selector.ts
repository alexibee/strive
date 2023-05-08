import { createSelector } from 'reselect';
import { UserState } from './user.reducer';
import { RootState } from '../store';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.currentUser
);

export const selectUserIsLoading = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.isLoading
);

export const selectUserError = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.error
);
